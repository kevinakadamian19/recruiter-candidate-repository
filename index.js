'use-strict';

function getRepository() {
	const userHandle = $('#js-text-field').val();
	const url = `https://api.github.com/users/${userHandle}/repos`;
	
	fetch(url)
		.then(response => {
			if(response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
			})
		.then(responseJson => console.log(responseJson))
		.catch(error => alert('Something went wrong. Try again later.'));
}

function displayRespository(responseJson) {
	console.log(responseJson);
	$('.results').empty();
	/*for(i = 0, i <= responseJson.length, i++) {
	$('.results').append(`
		<h2>${responseJson[i].name}</h2>
		<h3>${responseJson[i].html_url}</h3>
		`)};*/
	$('.results').removeClass('hidden');
}

function watchSubmit() {
	$('form').submit(event => {
		event.preventDefault();
		getRepository();

	});
}

function renderApp() {
	console.log('App is loaded. Waiting for submission!');
	watchSubmit();
}

renderApp();