//Zmienne 
var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

// Zapisz joke w paragrafie
function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);

	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}

//kiedy pobrać joke?
//klik
button.addEventListener('click', function(){
	getJoke();
});

//od razu
getJoke();

