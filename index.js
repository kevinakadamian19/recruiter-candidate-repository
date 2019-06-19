'use-strict';

function getRepository() {
	const userHandle = $('#js-text-field').val();
	const url = `https://api.github.com/users/${userHandle}/repos`;
	
	fetch(url)
		.then(response => {
			if(response.ok) {
				return response.json();
			}
			throw new Error('Something is wrong from the search');
			})
		.then(responseJson => displayRespository(responseJson))
		.catch(error => alert('Something is wrong with the displayRespository function.'));
}

function displayRespository(responseJson) {
	console.log(responseJson);
	$('.results').empty();
	for(i = 0; i <= responseJson.item.length; i++) {
	$('.results').append(`
		<h2>${responseJson.item[i].name}</h2>
		<h3>${responseJson.item[i].url}</h3>
		`)};
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