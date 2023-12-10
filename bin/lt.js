#!/usr/bin/env node
/* eslint-disable no-console */

// const openurl = require('openurl');
// const process = require('process');


const localtunnel = require('../localtunnel');
// const { version } = require('../package');

// console.log(process.argv);

const createTunnel = () =>
    localtunnel({
      port: 7860,
      host: 'http://14.117.214.230:3010',
    }).then(tunnel => {
      console.log('your url is: %s', tunnel.url);
    });
createTunnel();