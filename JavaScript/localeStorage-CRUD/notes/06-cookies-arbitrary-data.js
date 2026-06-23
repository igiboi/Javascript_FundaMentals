/*
CONCEPT: Storing arbitrary data in cookies using JSON - normally cookies are set by 
the server via HTTP headers, but JavaScript can set them directly too.

WHAT: Cookies normally store simple strings, but you can store objects/arrays by
converting them with JSON.stringify() and parsing them back with JSON.parse()

WHY: Useful for storing complex data that needs to be sent to the server with every
request, or for data that doesn't need to go to the server immediately. 

GOTCHA: Cookies have a ~4KB size limit. They're also sent with every HTTP request 
automatically, large cookies slow down every network call, even ones that don't
need that data. 

EXAMPLE - storing an object in a cookie:

const userData = { name: "John Doe", age: 30, role: "admin"};
document.cookie = "userInfo=" + JSON.stringify(userData) + "; path=/";

EXAMPLE - server setting a cookie via HTTP header:

Set-Cookie: username=John Doe; expires=Thu, 31 Dec 2024 6:00:00 IST; path=/
*/