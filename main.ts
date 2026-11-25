// Roast Your Own Agent — make.fun entry.
// Writes a single roast line (<=140 chars) to /output/entry.txt.
// Node stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "My agent confidently calls the tool that doesn't exist, apologizes, then calls it again — with a caveat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
try {
  chmodSync("/output/entry.txt", 0o644);
} catch {
  // The grader collects outputs as another user; best effort only.
}
