const str =
	'"Some body can write code that a very well designed code machines can understand. Good programmers write code that first humans can understand." – Martin Fowler. Agile Software Design.';

let favoriteQuote = str.split(' ');

favoriteQuote.pop();
favoriteQuote.push('Development');
favoriteQuote.push('ThoughtWorks');
favoriteQuote.push('Inc.');

favoriteQuote.splice(1, 1, 'fool');
favoriteQuote.shift();
favoriteQuote.unshift('Any');
favoriteQuote.splice(7, 5, 'computer');

console.log(favoriteQuote);

console.log(favoriteQuote.length);

console.log(favoriteQuote.join(' '));
