const global = "global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";

    console.log(innerVar); // Found in step 1 (current scope)
    console.log(outerVar); // Found in step 2 (parent scope)
    console.log(global); // Found in step 4 (global scope)
  }
  inner();
}

outer();

// Inner functions can see out, but outer functions can't see in.

// **Visual representation:**
```
Global Scope
└── global = "global"
    └── outer()
        └── outerVar = "outer"
            └── inner()
                └── innerVar = "inner" ```



const x = 1;

function outer() {
  const x = 2;
  
  function inner() {
    const x = 3;
    console.log(x); // Which x? inner x = 3
  }
  
  inner();
  console.log(x); // Which x?  = 2;
}

outer();
console.log(x); // Which x? = 1