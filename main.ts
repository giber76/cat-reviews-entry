// Cat Reviews Its Human — make.fun entry (Node 22, standard library only).
// Writes one funny single-line one-star review, in the voice of a house
// cat about its human, to /output/entry.txt. The gate takes UTF-8 text
// of 1 to 200 characters; this line is 150 characters.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'One star. He leaves for eight hours, comes home smelling of other cats, then sits in my sunbeam like the rent is paid. Would not recommend this human.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Guard the gate before writing: one line, 1–200 characters, not blank.
// If the line ever drifts out of shape, fail loudly instead of handing
// the judge an invalid entry.
if (!ENTRY || ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes('\n') || ENTRY.trim().length === 0) {
  throw new Error('entry must be a single non-blank line');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
