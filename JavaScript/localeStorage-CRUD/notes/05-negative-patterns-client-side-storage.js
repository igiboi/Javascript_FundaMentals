/*
CONCEPT: Negative patterns in client-side storage, misuse of localStorage, cookies,
and browser fingerprinting. 

WHAT: Client-side storage can be misused in ways that compromise user privacy and security

NEGATIVE PATTERNS:

1. Storing sensitive data in localStorage: localStorage is not encrypted, anyone with
DevTools access can read it. Never store passwords, tokens, or personal data. 

2. Excessive cookie tracking: Websites use cookies to track user behavior across hundreds
of sites, building a detailed profile for targeted advertising. Privacy concern, not a security bug. 

3. Browser fingerprinting: Combines browser info (user agent, screen size, plugins) to
uniquely identify a user without cookies, harder to block than tracking cookies

STORAGE LIMIT GOTCHA: localStorage is limited to ~5MB per domain. Exceeding it throws a
QuotaexceededError.
*/