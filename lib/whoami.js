const { STSClient, GetCallerIdentityCommand } = require('@aws-sdk/client-sts');
const { fromIni } = require('@aws-sdk/credential-providers');

module.exports = {

    whoAmI: async (profileName) => {
        try {
            const clientConfig = {
                region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || 'us-east-1'
            };

            if (profileName) {
                clientConfig.credentials = fromIni({ profile: profileName });
            }

            const sts = new STSClient(clientConfig);
            const data = await sts.send(new GetCallerIdentityCommand({}));
            const message = `You are logged in as ${data.Arn}`;
            return message;
        } catch (err) {
            const profileLabel = profileName ? `the ${profileName}` : 'any';
            const msg = `You are not logged in under ${profileLabel} profile.`;
            return msg;
        }
    }
};
