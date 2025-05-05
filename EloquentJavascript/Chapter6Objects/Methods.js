// methods refers to functions that are stored in properties of objects and can operate using that object’s data via this.
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak('Oh my fur and whiskers are white');
hungryRabbit.speak('Where the carrots at?')

// Arrow functions do not have their own this.
//They "capture" the this value from the surrounding context (also called lexical scoping). 

let finder = {
    find(array) {
        return array.some(v => v == this.value);
    },
    value: 5
};

console.log(finder.find([10, ]));