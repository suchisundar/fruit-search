const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function isLetter(char) {
	return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
  }
function search(keywordInput) {

	if (keywordInput.length) {
		results = fruit.filter(keyword => keyword.toLowerCase().includes(keywordInput.toLowerCase())); // filters fruit list for the keyword input
	}
	return results;
}
  
  function searchHandler(e) {
	const keywordInput = e.target.value;
  
	for (let i = 0; i < keywordInput.length; i++) {
	  if (!isLetter(keywordInput[i]) && keywordInput.length > 0) {
		alert("You can only search using letters!"); // test to alert if input is not a letter
		return;
	  }
	}
  
	const results = search(keywordInput);
	showSuggestions(results);
  }

function showSuggestions(results, inputVal) {
	const listOfSuggestions = results.map((inputVal) => {
		return `<li>${inputVal}</li>`; // new fruit array created from the results
	});
	suggestions.innerHTML = listOfSuggestions.join(""); //joins suggestions together and sets them to the innerHTML
}

function useSuggestion(event) {
	input.value = event.target.innerHTML; // sets the input value to the target value
	suggestions.innerHTML = ""; // clears the suggestions
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);