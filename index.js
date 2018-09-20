const express = require('express');
const fetch = require('node-fetch');

const app = express();

async function getUser (NAME) {
	let response = await fetch(`https://api.github.com/users/${NAME}`);
	let user = await response.json();
	console.log(user.name);
}

app.listen(9999, () => {
	console.log('Server sterted...');
	getUser('EugeneSolovyev');
})