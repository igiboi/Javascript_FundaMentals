function maskEmail(email) {
    const atSymbolIndex = email.indexOf('@');

    const firstChar = email[0];

    const lastChar = email[atSymbolIndex - 1];

    const maskedSection = '*'.repeat(atSymbolIndex - 2);

    const domain = email.slice(atSymbolIndex);

    return firstChar + maskedSection + lastChar + domain;
    
}

console.log(maskEmail('luigi@example.com'));