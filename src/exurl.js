const url = require('node:url');
const myURL = new URL('https://example.org:81/foo');
console.log(myURl.host);
//prints example.org:81

myURL.host = 'example.com:82';
console.log(myURL.href);
//prints https://example.com:82/foo