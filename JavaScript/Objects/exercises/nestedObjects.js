const company = {
  name: "TechCorp",
  address: {
    city: "New York",
    country: "USA",
  },
  ceo: {
    name: "Alice",
    age: 45,
    contact: {
      email: "alice@techcorp.com",
      phone: "555-1234",
    },
  },
};

/*
Write a function getCeoEmail that returns the CEO's email address.
*/

function getCeoEmail(company) {
  return company.ceo.contact.email;
}

const result = getCeoEmail(company);

console.log(result);