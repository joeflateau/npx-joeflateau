#!/usr/bin/env node
import chalk from 'chalk';

const blue = chalk.rgb(64, 164, 255);
const gray = (v: number) => chalk.rgb(v, v, v);

const message = [
  blue.bold`Joe Flateau`,
  gray(120)('-'.repeat(32)),
  gray(190)`joe@joeflateau.net`,
  gray(190)`https://joeflateau.net`,
  gray(120)('-'.repeat(32)),
  gray(190)`https://twitter.com/joeflateau`,
  gray(190)`https://github.com/joeflateau`,
  gray(190)`https://linkedin.com/in/joeflateau`,
  // gray(120)(''),
  // gray(190)(
  //   `${chalk.bold(
  //     'Make one of these:'
  //   )} ${'https://joeflateau.net/posts/npx-yourself'}`
  // ),
];

console.info('\n' + message.join('\n') + '\n');
