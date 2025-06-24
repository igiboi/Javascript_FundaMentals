// In JavaScript, the value of this inside a function is determined at call time via one of these rules (listed in priority order):

// Arrow-Function (Lexical) Binding

// Explicit Binding (.call(), .apply(), .bind())

// New Binding (when a function is called with new)

// Implicit Binding (method call on an object)

// Default (Global or undefined) Binding

// Whenever you see a function invoked,

// ask:
// “Is it an arrow function? If not, was it called with .call/.apply/.bind? If not, was it invoked as a constructor (new)?
// If not, was it invoked as a method (obj.method())?
//  If none of those, then it’s the default binding (global or undefined in strict mode).”

const speaker = {
    topic: "JavaScript",
    talkRegular() {
      console.log("regular:", this.topic);
    },
    talkArrow: () => {
      console.log("arrow:", this.topic);
    }
  };
  
  speaker.talkRegular(); // regular: Javascript
  speaker.talkArrow();   // arrow: undefined
  
  const extractedRegular = speaker.talkRegular; // you lost the method call so it will be undefined. 
extractedRegular();    // regular: undefined
  
const preserveRegular = speaker.talkRegular.bind(speaker);
    preserveRegular(); // regular: Javascript
  
  const extractedArrow = speaker.talkArrow;
  extractedArrow();      // arrow: undefined
  


  const trainer = {
    name: "Luigi",
    teach() {
      console.log("outer this.name →", this.name);
      function innerRegular() {
        console.log("innerRegular this.name →", this.name);
      }
      const innerArrow = () => {
        console.log("innerArrow this.name →", this.name);
      };
      innerRegular();
      innerArrow();
    }
  };
  
trainer.teach();
// outer this.name → Luigi
// innerRegular this.name → undefined, regular functions get fresh this everytime
// innerArrow this.name → Luigi, arrow functions copy this in gloabl

// How to capture this for regular functions 
const trainerRegularFunctionsConst = {
    name: "Luigi",
    teach() {
      console.log("outer this.name →", this.name);
  
      // ✦ Capture the outer `this` in a variable:
      const self = this;
  
      function innerRegular() {
        // use `self` instead of `this`
        console.log("innerRegular self.name →", self.name);
      }
  
      const innerArrow = () => {
        console.log("innerArrow this.name →", this.name);
      };
  
      innerRegular();
      innerArrow();
    }
  };
  
  trainerRegularFunctionsConst.teach();
  // → outer this.name → Luigi
  // → innerRegular self.name → Luigi
// → innerArrow this.name → Luigi
  

const trainerCallRegularFunctions = {
    name: "Luigi",
    teach() {
      console.log("outer this.name →", this.name);
  
      function innerRegular() {
        console.log("innerRegular this.name →", this.name);
      }
  
      const innerArrow = () => {
        console.log("innerArrow this.name →", this.name);
      };
  
      // ✦ Bind `this` explicitly on the call:
      innerRegular.call(this);
      innerArrow(); // arrow already “stuck” to the same `this`
    }
  };
  
  trainer.teach();
  // → outer this.name → Luigi
  // → innerRegular this.name → Luigi
  // → innerArrow this.name → Luigi
  

  const trainerBindRegularFunctions = {
    name: "Luigi",
    teach() {
      console.log("outer this.name →", this.name);
  
      function innerRegular() {
        console.log("innerRegular this.name →", this.name);
      }
  
      // ✦ Create a bound copy:
      const innerRegularBound = innerRegular.bind(this);
  
      const innerArrow = () => {
        console.log("innerArrow this.name →", this.name);
      };
  
      innerRegularBound(); // now `this` inside refers to `trainer`
      innerArrow();        // arrow still refers to `trainer`
    }
  };
  
  trainer.teach();
  // → outer this.name → Luigi
  // → innerRegular this.name → Luigi
  // → innerArrow this.name → Luigi
  

  function Gadget(name) {
    this.name = name;
    console.log('inside Gadget this.name →', this.name);
  }

  const BoundGadget = Gadget.bind({ name: 'Ignored' });
  const g1 = new BoundGadget('Pixel');
  console.log('constructed g1.name →', g1.name);

  const g2 = new Gadget({ name: 'CallObj' }, 'Nexus');
  console.log('returned from call g2 →', g2.name);