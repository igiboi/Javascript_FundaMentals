// ============================================================
// Group Contacts by City
// ============================================================
// Given an array of contact objects, return a Map where each
// key is a city and the value is an array of names who live there.

const contacts = [
  { name: "Alice", city: "NYC" },
  { name: "Bob", city: "LA" },
  { name: "Carol", city: "NYC" },
  { name: "Dave", city: "LA" },
  { name: "Eve", city: "Chicago" },
];

// Expected:
// Map {
//   "NYC"     => ["Alice", "Carol"],
//   "LA"      => ["Bob", "Dave"],
//   "Chicago" => ["Eve"]
// }

function groupByCityByObjects(contacts) {
  // your code here
  return contacts.reduce((cityObject, contact) => {
    if (!cityObject[contact.city]) cityObject[contact.city] = [];
    cityObject[contact.city].push(contact.name);
    return cityObject;
  }, {});
}

function groupByCityByMaps(contacts) {
  return contacts.reduce((cityMap, contact) => {
    if (!cityMap.has(contact.city)) cityMap.set(contact.city, []);
    cityMap.get(contact.city).push(contact.name);
    return cityMap;
  }, new Map());
}

console.log(groupByCityByObjects(contacts));
console.log(groupByCityByMaps(contacts));
