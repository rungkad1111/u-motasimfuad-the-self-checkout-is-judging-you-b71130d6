import { mkdirSync, writeFileSync } from "node:fs";

// The Self-Checkout Is Judging You
// One line, 95 characters: the smug till sizes up the shopper's
// twelve-yoghurt basket and finds it wanting — a vending machine
// has made braver life choices.
const line =
  "Twelve yoghurts and nothing else. I've seen vending machines make braver life choices than you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
