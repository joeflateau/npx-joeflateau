#!/usr/bin/env node
import chalk from 'chalk';

console.log(
  '\n' +
    `
  ${chalk.rgb(64, 164, 255)(`Joe Flateau`)}
  ${chalk.rgb(200, 200, 200)(`joe@joeflateau.net`)}
  ${chalk.rgb(112, 112, 112)('-'.repeat(32))}

  https://joeflateau.net
  https://twitter.com/joeflateau
  https://github.com/joeflateau

`
      .trim()
      .split('\n')
      .map(line => line.trim())
      .join('\n') +
    '\n'
);
