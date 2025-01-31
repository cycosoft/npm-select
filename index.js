#!/usr/bin/env node

// imports
const path = require('path');
const packageJson = require(path.join(process.cwd(), 'package.json'));
const prompts = require('prompts');

// constants
const EXIT_VALUE = '---';
const choices = [];
const args = process.argv.slice(2);
const callingScript = process.env.npm_lifecycle_event;
let excludePattern = `--.*|\/\/.*`;
let filterPattern = '';

// find the index of the exclude and filter parameters
const excludeIndex = args.findIndex(arg => arg === '--exclude');

// if the exclude parameter is found
if ( excludeIndex > -1 ) {
	// if the next argument is a flag, then alert the user
	if (args.length <= excludeIndex + 1 || args[excludeIndex + 1].startsWith('--')) {
		console.log('');
		console.warn('"--exclude" parameter must be followed by a regex pattern');
		console.log('');
	} else {
		// set the exclude pattern to the next argument
		excludePattern = args[excludeIndex + 1];
	}
}

const includeIndex = args.findIndex(arg => arg === '--filter');

// if the filter parameter is found
if ( includeIndex > -1 ) {
	// if the next argument is a flag, then alert the user
	if (args.length <= includeIndex + 1 || args[includeIndex + 1].startsWith('--')) {
		console.log('');
		console.warn('"--filter" parameter must be followed by a regex pattern');
		console.log('');
	} else {
		// set the filter pattern to the next argument
		filterPattern = args[includeIndex + 1];
	}
}

// loop through the scripts
for (const key in packageJson.scripts) {
	// if the script is the calling script, then skip it
	if (key === callingScript) {
		continue;
	}

	// if the script matches a exclude, then skip it
	if (key.match(excludePattern)) {
		continue;
	}

	// if the filter pattern is set and the script doesn't match it, then skip it
	if (filterPattern && !key.match(filterPattern)) {
		continue;
	}

	// add the script to the output
	choices.push({ title: key });
}

// alphabetize the output by 'title'
choices.sort((a, b) => a.title.localeCompare(b.title));

// add an exit option
choices.push({ title: 'Exit', value: EXIT_VALUE });

// async wrapper
(async () => {
	const response = await prompts({
		type: 'autocomplete',
		name: 'value',
		message: 'Select the command to run',
		choices
	});

	// if the response has no value, then exit
	if (!response.value) {
		console.error('Selected command not found. Exiting...');
		return;
	}

	// if the response is the exit value, then exit
	if (response.value === EXIT_VALUE) {
		console.error('Exiting...');
		return;
	}

	// run the .title property as an `npm run` command
	require('child_process').execSync(`npm run ${response.value}`, { stdio: 'inherit' });
})();