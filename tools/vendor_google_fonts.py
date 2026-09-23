"""Vendor the portfolio's Google Fonts CSS, WOFF2 subsets and licenses."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import hashlib
import re
import time
import urllib.request

DEST = Path(__file__).resolve().parents[1] / "threejs-integration-test/public/fonts"
CSS_URL = "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;700&display=swap"
AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"


def download(url):
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={"User-Agent": AGENT})
            with urllib.request.urlopen(request, timeout=40) as response:
                return response.read()
        except Exception:
            if attempt == 2:
                raise
            time.sleep(1 + attempt)


def vendor_font(url):
    name = hashlib.sha256(url.encode()).hexdigest()[:20] + ".woff2"
    target = DEST / name
    if not target.exists():
        data = download(url)
        if data[:4] != b"wOF2":
            raise ValueError(f"Not WOFF2: {url}")
        target.write_bytes(data)
    return url, name


def main():
    DEST.mkdir(parents=True, exist_ok=True)
    css = download(CSS_URL).decode("utf-8")
    urls = sorted(set(re.findall(r"https://fonts\.gstatic\.com/[^)\s]+", css)))
    if not urls:
        raise ValueError("No font files in response")
    with ThreadPoolExecutor(max_workers=6) as pool:
        for url, name in pool.map(vendor_font, urls):
            css = css.replace(url, "./" + name)
    for family in ("dmmono", "manrope", "notosanssc"):
        license_data = download(f"https://raw.githubusercontent.com/google/fonts/main/ofl/{family}/OFL.txt")
        if b"SIL OPEN FONT LICENSE" not in license_data:
            raise ValueError(f"Unexpected license for {family}")
        (DEST / (family + "-OFL.txt")).write_bytes(license_data)
    if "https://" in css:
        raise ValueError("External URL remains")
    (DEST / "fonts.css").write_text(css, encoding="utf-8")
    (DEST / "README.txt").write_text(
        "DM Mono, Manrope, Noto Sans SC. Source: " + CSS_URL + "\n"
        "Unmodified WOFF2 subsets, distributed under the accompanying SIL OFL licenses.\n"
        "unicode-range and font-display: swap are retained. Regenerate with tools/vendor_google_fonts.py.\n",
        encoding="utf-8",
    )
    print(f"Vendored {len(urls)} WOFF2 files, CSS and three licenses", flush=True)


if __name__ == "__main__":
    main()
