'use strict';
const path = require('path');
const React = require('react');
const {Box, Text} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');
const terminalImage = require('terminal-image');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const createItems = items => {
	for (const item of items) {
		item.key = item.url || item.label;
	}

	return items;
};

const items = createItems([
	{
		label: 'Blog',
		url: 'https://blog.kglabo.com'
	},
  {
    label: 'Podcast',
    url: 'https://podcast.kglabo.com'
	},
  {
    label: 'Set of Skills',
    url: 'https://www.resume.id/yu_kgr'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/yu-kgr'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/yu_kgr'
	},
	{
		label: 'Facebook',
		url: 'https://www.facebook.com/yk.kgr'
	},

	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Box marginBottom={1}>
			<Text>
					Hi. i'm web developer. I want to bring smiles to people through my technology.
			</Text>
		</Box>
		<SelectInput items={items} onSelect={handleSelect}/>
	</Box>
);
