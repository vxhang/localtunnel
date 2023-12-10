#!/usr/bin/env node
/* eslint-disable no-console */

// const openurl = require('openurl');
const process = require('process');


const localtunnel = require('../localtunnel');
// const { version } = require('../package');

console.log(process.argv);

localtunnel({
    port: process.argv[3],
    // host: 'https://localtunnel.me',
    host: 'http://14.117.214.201:3010',
}).then(tunnel => {
    console.log('your url is: %s', tunnel.url);
});