/*
CONCEPT:

WHAT: Small pieces of data a server sends to the browser, stored on
the users devices and sent back with every request. 

WHY: HTTP is stateless - cookies give it memory so the server can 
recognize returning users. 

HOW COOKIES WORK: Server sends a Set-Cookie  
header → browser stores it → browser attaches it to 
every future request to that domain automatically. 

TYPES OF COOKIES:

Session: deleted when tab/browser closes 

Persistent: has an expiration date, survives browser close

Secure: only sent over HTTPS

HttpOnly: JavaScript cannot access it, protects against XSS attacks

GOTCHA: Cookies are sent with every HTTP request automatically
don't store sensitive data like passwords in them

EXAMPLE - setting a cookie:
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2021 23:59:59 GMT; path=/";


EXAMPLE - deleting a cookie:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

*/
