const Configstore = require('configstore');
const pkg = require('../package.json');
const conf = new Configstore(pkg.name);
const CLI = require('clui');
const Spinner = CLI.Spinner;

module.exports = {

    conf,

    getInstance: () => {
        const status = new Spinner('Checking for instances, please wait...');
        status.start();
        status.stop();
        return conf.get('instance_urls');
    },

    registerNewInstance: (url) => {
        if (!url) {
            return conf.get('instance_urls');
        }
        const urls = conf.get('instance_urls') || [];
        if (!urls.includes(url)) {
            urls.push(url);
            conf.set('instance_urls', urls);
        }
        return urls;
    }

};
