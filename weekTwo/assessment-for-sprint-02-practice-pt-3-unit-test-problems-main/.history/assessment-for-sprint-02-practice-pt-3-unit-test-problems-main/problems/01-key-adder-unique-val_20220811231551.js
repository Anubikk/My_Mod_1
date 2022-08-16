/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/
//should add the key and value to the object only if the value is not already a value for a different key in the object.

const keyAdderUniqueVal = (object, key, value) => {
    for (let key in object) { //loop through the object
        if (object[key] === value) { 
            return object;
        }
    }
    object[key] = value;
    return object;
}




// function keyAdderUniqueVal(object, key, value) {
//     if (!object[key]) { // if the key is not in the object
//         object[key] = value; // set the key and value as a key value pair in the object
//     }
//     return object; // return the object

// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;