/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');
const sourcePath = path.resolve(__dirname, '../secrets');
const destinationPath = path.resolve(__dirname, '../dist/secrets');
fs.copySync(sourcePath, destinationPath);