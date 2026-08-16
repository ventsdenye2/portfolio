"""Remove the unused default collection and refresh the final local report."""

import json
from pathlib import Path

import bpy


WORKSPACE = Path(r"D:\portfolio\portfolio")
REPORT_PATH = WORKSPACE / "portfolio_assets_report.json"


def main():
    default_collection = bpy.data.collections.get("Collection")
    if default_collection is not None and not default_collection.objects and not default_collection.children:
        bpy.data.collections.remove(default_collection, do_unlink=True)
    elif default_collection is not None and "Reference_Camera" not in bpy.data.collections:
        default_collection.name = "Reference_Camera"

    report = json.loads(REPORT_PATH.read_text(encoding="utf-8"))
    report["collections"] = [collection.name for collection in bpy.data.collections]
    report.setdefault("notes", []).append("Unused default empty Collection was removed.")
    report["blend_file"] = bpy.data.filepath
    bpy.ops.wm.save_as_mainfile(filepath=bpy.data.filepath)
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print("BLENDER_ASSET_FILE_CLEANED")
    print(json.dumps({"blend_file": bpy.data.filepath, "collections": report["collections"]}, ensure_ascii=False))


main()
