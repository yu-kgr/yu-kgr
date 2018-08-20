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
		url: 'https://kglabo.com'
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
			<Text>I am aiming UX engineer🍣<br/>I like to think about what is the essential problem of things.<br/>The remark content is personal opinion.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
