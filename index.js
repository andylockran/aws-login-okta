#!/usr/bin/env node

const pc       = require('picocolors');
const figlet   = require('figlet');
const inquirer = require('./lib/inquirer');
const okta     = require('./lib/okta');
const aws      = require('./lib/whoami');

console.clear();
console.log(
  pc.yellow(
    figlet.textSync('OKTA AWS Login', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  try {
    const profile = await inquirer.askAWSProfile();
    console.log(`You are using the ${profile.aws_profile} profile for this session.`);
    const me = await aws.whoAmI(profile.aws_profile);
    console.log(me);
  } catch (error) {
    if (error && error.name === 'ExitPromptError') {
      process.exit(0);
    } else {
      console.error(pc.red(error.message || String(error)));
    }
  }
};

if (require.main === module) {
  run();
}

module.exports = { run };
