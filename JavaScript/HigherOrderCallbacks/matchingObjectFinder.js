// Example call:
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

function whatIsInAName(arrayObject, sourceObject) {
  // STEP 1: arrayObject = [{ first: "Romeo", last: "Montague" }, { first: "Tybalt", last: "Capulet" }]
  //         sourceObject = { last: "Capulet" }

  return arrayObject.filter((obj) => 
    // STEP 2: filter visits each object one by one
    //         first pass:  obj = { first: "Romeo", last: "Montague" }
    //         second pass: obj = { first: "Tybalt", last: "Capulet" }

    // STEP 3: get all keys from sourceObject as an array
    //         Object.keys({ last: "Capulet" }) → ["last"]
     Object.keys(sourceObject).every((key) => {
      // STEP 4: every() checks each key — here just "last"
      //         key = "last"

      // STEP 5: compare obj's value to sourceObject's value at this key
      //         first pass:  obj["last"] = "Montague" === sourceObject["last"] = "Capulet" → false → object dropped
      //         second pass: obj["last"] = "Capulet"  === sourceObject["last"] = "Capulet" → true  → object kept
      return obj[key] === sourceObject[key];
    })
  );

  // RESULT: [{ first: "Tybalt", last: "Capulet" }]
}
