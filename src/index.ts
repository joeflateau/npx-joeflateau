#!/usr/bin/env node
import chalk from "chalk";
import { textSync } from "figlet";

const blue = chalk.rgb(64, 164, 255);
const gray = (v: number) => chalk.rgb(v, v, v);

const banner = (label: string, width = 64) => {
  return `\n-- ${label} ${"-".repeat(width - 6)}\n`;
};

const line = (text: string) => `   ${text}`;

const message = [
  blue(textSync(`Joe Flateau`, "ANSI Shadow")),
  gray(120)(banner("Contact")),
  gray(190)(line(`joe@joeflateau.net`)),
  gray(190)(line(`https://joeflateau.net`)),
  gray(120)(banner("Social")),
  gray(190)(line(`https://twitter.com/joeflateau`)),
  gray(190)(line(`https://github.com/joeflateau`)),
  gray(190)(line(`https://linkedin.com/in/joeflateau`)),
];

console.info("\n" + message.join("\n") + "\n");
