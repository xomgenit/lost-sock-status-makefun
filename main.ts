// lost-sock-status-makefun
// Entry program for the make.fun bounty "Funniest Lost Sock Status Update".
// Writes one status update, in the voice of a lost sock, to entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const line =
  "Day 14 inside the duvet cover. I have seen the dryer from the inside. Tell my pair I fought.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

// Self-check mirroring the sealed scorer: UTF-8 text of 1–120 characters,
// not only white space, and identical to what we intended to write.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== line) {
  throw new Error("entry.txt does not match the intended line");
}
const length = [...written].length;
if (length < 1 || length > 120 || written.trim().length === 0) {
  throw new Error(`entry.txt fails the gate: ${length} characters`);
}
