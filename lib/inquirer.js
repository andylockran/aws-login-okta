const inquirer = require('inquirer');

module.exports = {

    askAWSProfile: () => {
        const questions = [{
            name: 'aws_profile',
            type: 'input',
            message: 'Which AWS profile do you want to use:',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter the URL of your OKTA instance.';
                }
            }
        }];
        return inquirer.prompt(questions);
    },

    askOKTAInstanceDetails: () => {
        const questions = [{
            name: 'okta_url',
            type: 'input',
            message: 'What is the URL of your OKTA instance:',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter the URL of your OKTA instance.';
                }
            }
        }];
        return inquirer.prompt(questions);
    },

    askOKTACredentials: () => {
        const questions = [{
                name: 'username',
                type: 'input',
                message: 'Enter your OKTA username or e-mail address:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your username or e-mail address.';
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                message: 'Enter your password:',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your password.';
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
}