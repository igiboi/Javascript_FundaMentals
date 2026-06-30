/*
CONCEPT: IndexedDB - a browser based database for storing large amounts
of structured data client-side. 

WHAT: A built-in browser API that stores JavaScript objects, files,
and complex data - unlike localStorage which only stores strings.

WHY: For apps that need to work offline with large or complex 
datasets that localStorage can't handle. 

localStorage vs IndexedDB:

localStorage → strings only, ~5MB limit synchronous, simple key-value

indexedDB → objects/files, hundreds of MBs, asynchronous, supports queries 

KEY TERMS:

Object Store: Similar to a table in a traditional database - 
holds the actual records

Transaction: A group of database operations that run together - 
required for reading or writing data. 

Key Path: Like a primary key - uniquely identifies each record 
in an object store. 

Asynchronous: Operations don't block the main thread -
the UI stays responsive while data is being read/written. 

WHEN TO USE IndexedDB: Offline-first apps, large datasets, apps
that need to sync when reconnecting to the network. 

GOTCHA: The API is verbose and complex. In real projects most 
developers use a library like DExie.js on top of IndexedDB to simplify it. 

*/