'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Blog',
		url: 'https://blog.kglabo.com'
	},
  {
    label: 'Podcast',
    url: 'https://podcast.kglabo.com'
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
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Hi. i'm Web Developer.<br/>I want to bring smiles to people through my technology.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
