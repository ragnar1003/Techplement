const quote = document.getElementById("quote");
const author = document.getElementById("author");



const apiUrl = "https://api.quotable.io/random";
async function RandomQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    document.getElementById("btn2").classList.remove("red-button");
    searchResultsContainer.innerHTML = '';
}
RandomQuote(apiUrl);

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function() {
  this.classList.toggle('red-button');
});
 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn2").classList.remove("red-button");
    searchResultsContainer.innerHTML = '';
});

  function copyToClip(){
    const quote = document.getElementById("quote").textContent;
    navigator.clipboard.writeText(quote);
    const copyButton = document.getElementById("btn3");
    copyButton.style.background = "grey"; 
  setTimeout(() => {
    copyButton.style.background = ""; 
  }, 1000);
  }
  const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResultsContainer = document.getElementById('search-results');

searchButton.addEventListener('click', async () => {
  const authorName = searchInput.value.trim();
  if (authorName) {
      const response = await fetch(`https://api.quotable.io/quotes?author=${authorName}`);
      const data = await response.json();
      const quotes = data.results;
      displaySearchResults(quotes);
    
  }
});

function displaySearchResults(quotes) {
  searchResultsContainer.innerHTML = '';
  quotes.forEach((quote) => {
    const quoteElement = document.createElement('div');
    quoteElement.textContent = `${quote.content}`;
    quoteElement.className = 'quote';
    searchResultsContainer.appendChild(quoteElement);
  });
}

