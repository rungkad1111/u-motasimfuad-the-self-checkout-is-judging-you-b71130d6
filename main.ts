import { mkdirSync, writeFileSync } from "node:fs";

// The Self-Checkout Is Judging You
// One line, 95 characters: the smug till sizes up the shopper's
// twelve-yoghurt basket and finds it wanting — a vending machine
// has made braver life choices.
const basket = "Twelve yoghurts and nothing else.";
const verdict =
  "I've seen vending machines make braver life choices than you.";
const line = `${basket} ${verdict}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
