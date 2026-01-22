const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);


// which keyword are you
// const we can mutate it we cannot reassign it
// when you assign a variable you set the varaible equal to something
// when you assign a varaible with const you cannot reassign it

// assignment
const name = "Luigi";

// reassignment
name = "Mario"; // // TypeError: Assignment to constant variable.

console.log(name); 

// anything other than re assignment is allowed
// for primitive types, strings, numbers, and booleans.
// only way to change is to be reassigned

// variables that can change, there are mutable variables
// containers, collection can be mutated is like a box you can put things out of the box
// object and arrays can be mutated thats it

// assingment because name variable and equal sign and a value;
const array = [];
// mutation is allowed because it is not an assignment 
array.push(1);
// object
const object = {};
// variable names cannot contain dots 
object.name = "Luigi"; //not assignment, it is mutating the object

object = { age: 20 }; // TypeError: Assignment to constant variable.

console.log(object);

// memory address
// first column memory address,       second column: tag boolean, is it const or not a const,  third column: actual value

// if it's an object, when you assign new properties to the object stored seperately
// the only thing protected is the name of the object;


// you should never use "this" keyword 
// always stand alone functions