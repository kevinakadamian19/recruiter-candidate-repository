'use-strict';

const searchURL = 'https://api.github.com'

function getURL() {
	
}

function retreiveRepository() {
	.fetch('https://api.github.com/users/kevinakadamian19/repos')
	.then(response => response.json())
	.then(responseJson => console.log(responseJson))
	.catch(error => alert('Something went wrong. Try again later.'));
}

function watchSubmit() {
	$('form').submit(event => {
		event.preventDefault();
		retreiveUrl();
	});
}

function renderApp() {
	console.log('App is loaded. Waiting for submission!');
	watchSubmit();
}

renderApp();