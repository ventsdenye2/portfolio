/*
 * Vite 7 probes Windows network mappings with `net use` while resolving the
 * first source file. In restricted Windows environments that child-process
 * probe can fail with spawn EPERM even though the local project is healthy.
 * This project lives on a local drive, so skipping only that optional probe
 * preserves Vite's normal file resolution without hiding real errors.
 */
const childProcess = require("node:child_process");
const originalExec = childProcess.exec;

childProcess.exec = function safeExec(command, ...args) {
  const normalizedCommand = typeof command === "string" ? command.trim().toLowerCase() : "";
  if (normalizedCommand === "net use") {
    const callback = args.find((argument) => typeof argument === "function");
    if (callback) process.nextTick(() => callback(null, "", ""));
    return undefined;
  }
  return originalExec.call(this, command, ...args);
};
