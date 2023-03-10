const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const blockQuote = document.getElementById('quotes');
    blockQuote.innerHTML = quote.quote;
}
loadQuote();

const loadQuote1 = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote1(data))
}

const displayQuote1 = quote => {
    const blockQuote1 = document.getElementById('inspire-quotes')
    blockQuote1.innerHTML = quote.quote;
}
loadQuote1();

const loadQuote2 = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote2(data))
}
const displayQuote2 = quote => {
    const blockQuote2 = document.getElementById('inspire-quotes1')
    blockQuote2.innerHTML = quote.quote;
}
loadQuote2();