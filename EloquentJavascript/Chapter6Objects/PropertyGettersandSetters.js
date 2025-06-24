// accessor property

// Getters and setters

let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
    },

    set propName(value) {
        // setter, the code executed on setting obj.propName = value
    }
}

// Getters
// A getter is a method that gets the value of a property.
// it is defined using the get keyword.
// The getter function allows access to the property value when it is accessed.

const user = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(user.fullName);

// Setters
// A setter is a method that sets the value of a property
// The setter function allows controlled changes to the property value.

const person = {
    firstName: "Luigi",
    lastName: "Matias",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
}

person.fullName = "Yo Boy"

console.log(person.fullName);

// Accessor descriptors
// Descriptors for accessor properties are different from those for data properties.

// For accessor properties, there is no value or writable, but instead there are get and set functions.

// That is, an accessor descriptor may have:

// get – a function without arguments, that works when a property is read,
// set – a function with one argument, that is called when the property is set,
// enumerable – same as for data properties,
// configurable – same as for data properties.
let userObjectProperty = {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(userObjectProperty, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },

    set(value) {
      [this.name, this.surname] = value.split(' ');
    },
  });
  
  console.log(userObjectProperty.fullName); // John Smith
  
for (let key in userObjectProperty) console.log(key); // name, surname


// Please note that a property can be either an accessor (has get/set methods) 
// or a data property (has a value), not both.

// If we try to supply both get and value in the same descriptor, 
// there will be an error:
  
// Error: Invalid property descriptor.
// Object.defineProperty({}, 'prop', {
//     get() {
//       return 1
//     },
  
//     value: 2
//   });

//  Why This Fails
// Conflicting Behavior: The value and get descriptors are in conflict because:

// A data property expects a value to be stored directly.

// An accessor property expects a getter function to dynamically compute
// the property when accessed.

// The JavaScript engine doesn't know how to reconcile these two behaviors.

// You cannot define both value and get in the same property descriptor because
// they represent conflicting behavior.
//  A property can either be a data property (with a value)
// or an accessor property (with a get/set), but not both.

// Smarter getters/setters
let smartUser = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
        }
        this._name = value;
    }
};

smartUser.name = "Pete";
console.log(smartUser.name); // Name is too short, need at least 4 characters

smartUser.name = "";