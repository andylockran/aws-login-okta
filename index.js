const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const CLI = require('clui');
const Spinner = CLI.Spinner;
const inquirer  = require('./lib/inquirer');
const okta  = require('./lib/okta');
const aws = require('./lib/whoami')

clear();
console.log(
  chalk.yellow(
    figlet.textSync('OKTA AWS Login', { horizontalLayout: 'full' })
  )
);

const run = async () => {
  const profile = await inquirer.askAWSProfile();
  console.log(`You are using the ${profile.aws_profile} profile for this session.`);
  const me = await aws.whoAmI();
  console.log(me);
}

run();
