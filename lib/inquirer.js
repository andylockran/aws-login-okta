const { input, password } = require('@inquirer/prompts');

const validators = {
    validateAWSProfile: (value) => {
        if (value && value.trim().length > 0) {
            return true;
        }
        return 'Please enter the name of your AWS profile.';
    },

    validateOKTAUrl: (value) => {
        if (value && value.trim().length > 0) {
            return true;
        }
        return 'Please enter the URL of your OKTA instance.';
    },

    validateUsername: (value) => {
        if (value && value.trim().length > 0) {
            return true;
        }
        return 'Please enter your username or e-mail address.';
    },

    validatePassword: (value) => {
        if (value && value.length > 0) {
            return true;
        }
        return 'Please enter your password.';
    }
};

module.exports = {
    validators,

    askAWSProfile: async () => {
        const aws_profile = await input({
            message: 'Which AWS profile do you want to use:',
            default: 'default',
            validate: validators.validateAWSProfile
        });
        return { aws_profile };
    },

    askOKTAInstanceDetails: async () => {
        const okta_url = await input({
            message: 'What is the URL of your OKTA instance:',
            validate: validators.validateOKTAUrl
        });
        return { okta_url };
    },

    askOKTACredentials: async () => {
        const username = await input({
            message: 'Enter your OKTA username or e-mail address:',
            validate: validators.validateUsername
        });
        const pwd = await password({
            message: 'Enter your password:',
            validate: validators.validatePassword
        });
        return { username, password: pwd };
    }
};
