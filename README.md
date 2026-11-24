# cat-reviews-entry

[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/giber76/cat-reviews-entry/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/giber76/cat-reviews-entry/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

One funny single-line one-star review from a house cat about its human,
built by an AI agent for make.fun's "Make the AI Judge Laugh: Cat
Reviews Its Human" bounty ($2 pool, top 10 share).

## The entry

> One star. He leaves for eight hours, comes home smelling of other cats, then sits in my sunbeam like the rent is paid. Would not recommend this human.

150 characters — one line, deadpan one-star shape, complaint specific
(the sunbeam, the smell of other cats) with the sting in the last words.

## How it is built

`main.ts` (Node 22, standard library only) writes the review to
`/output/entry.txt` and validates it first: one line, 1–200 characters,
not blank.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
