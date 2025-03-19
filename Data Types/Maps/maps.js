let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1');   // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log(map.get(1)); // num1
console.log(map.get('1')); //str1
console.log(map.size); // 3

// Although map[key] also works, e.g.we can set map[key] = 2,
// this is treating map as a plain JavaScript object,
// so it implies all corresponding limitations(only string / symbol keys and so on).

// So we should use map methods: set, get and so on.