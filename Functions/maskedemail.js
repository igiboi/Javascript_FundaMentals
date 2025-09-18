/**
 * Mask an email address so that only the first and last character
 * of the local part (before "@") are visible.
 * Everything in between is replaced with "*".
 *
 * Example:
 *   "apple.pie@example.com" -> "a*******e@example.com"
 */
function maskEmail(email) {
  // Step 1: Find where the "@" is in the email string.
  // "apple.pie@example.com"
  //              ↑ atIndex = 9
  const atIndex = email.indexOf('@');

  // Step 2: If '@' is not found, return the email unchanged.
  if (atIndex === -1) {
    return email;
  }

  // Step 3: Split into local and domain parts.
  // "apple.pie@example.com"
  //  └───────┘ └───────────┘
  //   local      domain
  const localPart = email.slice(0, atIndex); // "apple.pie"
  const domainPart = email.slice(atIndex); // "@example.com"

  // Step 4: First and last characters of the local part.
  // "apple.pie"
  //  ^       ^
  //  a       e
  const firstChar = localPart[0]; // "a"
  const lastChar = localPart[localPart.length - 1]; // "e"

  // Step 5: Calculate how many characters are in the middle.
  // "apple.pie" → length 9
  // 9 - 2 = 7 middle chars
  let numberOfMiddleChars;
  if (localPart.length <= 2) {
    // If only 1 or 2 characters → nothing to mask in between
    numberOfMiddleChars = 0;
  } else {
    numberOfMiddleChars = localPart.length - 2;
  }

  // Step 6: Build the masked middle section.
  // Repeat "*" numberOfMiddleChars times.
  // Example: 7 → "*******"
  let maskedMiddle;
  if (numberOfMiddleChars > 0) {
    maskedMiddle = '*'.repeat(numberOfMiddleChars);
  } else {
    maskedMiddle = '';
  }

  // Step 7: Combine everything into the final result.
  // firstChar + maskedMiddle + lastChar + domainPart
  //   "a"    + "*******"   + "e"     + "@example.com"
  // = "a*******e@example.com"
  const maskedEmail = firstChar + maskedMiddle + lastChar + domainPart;

  // Step 8: Return the masked result.
  return maskedEmail;
}

// ✅ Outside the function: declare email variable
const email = 'apple.pie@example.com';
console.log(maskEmail(email));
// "a*******e@example.com"

// More tests
console.log(maskEmail('freecodecamp@example.com'));
// local = "freecodecamp" → f**********p@example.com

console.log(maskEmail('info@test.dev'));
// local = "info" → i**o@test.dev

console.log(maskEmail('user@domain.org'));
// local = "user" → u**r@domain.org

console.log(maskEmail('a@short.com'));
// local = "a" → only 1 char, no masking → a@short.com
