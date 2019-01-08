const AWS = require('aws-sdk');

module.exports = {

    whoAmI: (profile_name) => {
        var creds = new AWS.SharedIniFileCredentials({
            profile: profile_name
        });
        console.log(profile_name);
        AWS.Config.credentials = creds;
        console.log(creds);
        const sts = new AWS.STS();
        return sts.getCallerIdentity().promise()
            .then(data => {
                var message = `You are logged in as ${data.Arn}`;
                console.log(message);
                return message;
            })
            .catch(err => {
                var msg = `You are not logged in under the ${profile_name} profile.`;
                return msg;
            });
    }
}