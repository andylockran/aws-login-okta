const Configstore = require('configstore');
const pkg = require('../package.json');
const conf = new Configstore(pkg.name);
const CLI = require('clui');
const Spinner = CLI.Spinner;

module.exports = {

    getInstance: () => {
        const status = new Spinner('Checking for instances, please wait...');
        status.start();
        status.stop();
        return conf.get('instance_urls');
    },

    registerNewInstance: () => {
        return console.log('oops');
    }

}