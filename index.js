import * as core from '@actions/core';
import * as github from '@actions/github';


try {
    const nameToGreet = core.getInput('who-to-greet');
    const outputVal = `Hello ${nameToGreet}!`;
    core.setOutput('outputKey','outputVal');
} catch(error) {
    core.setFailed(error.messsage)
}