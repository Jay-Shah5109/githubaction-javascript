import * as core from '@actions/core';

const nameToGreet = core.getInput('who-to-greet');
const outputVal = `Hello ${nameToGreet}!`;
core.setOutput('outputKey','outputVal')