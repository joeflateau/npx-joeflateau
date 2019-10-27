#!/usr/bin/env node
import chalk from "chalk";
import { textSync } from "figlet";
import { createPromptModule } from "inquirer";
import fetch from "node-fetch";

const blue = chalk.rgb(64, 164, 255);
const gray = (v: number) => chalk.rgb(v, v, v);
const bannerChar = "-";
const padLeft = 4;

(async () => {
  clear();

  const message = [
    blue(textSync(`Joe Flateau`, "ANSI Shadow")),
    gray(120)(heading("Contact")),
    gray(190)(line(`joe@joeflateau.net`)),
    gray(190)(line(`https://joeflateau.net`)),
    gray(120)(heading("Social")),
    gray(190)(line(`https://twitter.com/joeflateau`)),
    gray(190)(line(`https://github.com/joeflateau`)),
    gray(190)(line(`https://linkedin.com/in/joeflateau`)),
    "",
    "",
  ];

  message.forEach(line => console.info(line));

  await contactForm();
})();

async function contactForm() {
  const prompt = createPromptModule();
  const { doContact } = await prompt([
    { type: "confirm", name: "doContact", message: "Would you like to say hi? I'd love to hear from you!" },
  ]);
  if (doContact) {
    const { message, name, email, doSend } = await prompt([
      { type: "input", name: "name", message: "Your name:", default: "anonymous" },
      { type: "input", name: "email", message: "Your email:", default: "anonymous@example.com" },
      { type: "input", name: "message", message: "Your message to me:", default: "👋" },
      { type: "confirm", name: "doSend", message: "Ready to send?" },
    ]);
    if (doSend) {
      try {
        await fetch("https://joeflateau.net/api/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, from: { name, email }, category: "npx-joeflateau" }),
        });
      } catch (err) {
        console.error(err.toString());
      }
    }
  }
}

function line(text: string) {
  return `${" ".repeat(padLeft)}${text}`;
}

function heading(label: string, width: number = 54) {
  return `\n${bannerChar.repeat(padLeft - 1)} ${label} ${bannerChar.repeat(width - 6 - label.length)}\n`;
}

function clear() {
  process.stdout.write("\x1b[2J");
}
