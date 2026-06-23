/*
CONCEPT: Cache API - store network requests and response
for offline access and faster load times. 

WHAT: A storage mechanism that stores Request and Response
objects. The key is the request, the value is the response.

WHY: HTTP requires a network connection - the Cache API
lets apps serve stored responses when offline or on a slow
connection. 

KEY TERMS:

Network Request: A request made by the browser to a server
to retrieve data or resources over the internet. 

Service Worker: A special JavaScript file that runs in the
background, acting as a middleman between the page and the
network, intercepts request, serves cached responses, handles
push notifications. 

PWA: A web app built with regular web tech that behaves like a
native app, installable works offline, sends push notifications

HOW IT WORKS: Browser makes a request → service worker intercepts it
→ checks the cache → if not, fetches from network and stores it.

BENEFIT: Faster load times and offline access by serving stored
responses instead of making new network requests.
*/