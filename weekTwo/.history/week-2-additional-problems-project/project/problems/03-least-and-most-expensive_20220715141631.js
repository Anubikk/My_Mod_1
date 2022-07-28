/*
Least and Most Expensive Toys:
    Write a function that accepts an object that represents a catalog of toys with their names and prices.
    The keys of the object are names of each toy, and the corresponding value is its price.
    The function should return an array where the first element is the name of the least expensive toy,
    and the second element is the name of the most expensive toy. You may assume there will always be
    one most and least expensive toy.

    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
*/

function leastAndMostExpensive(catalog) {
    let least = Object.keys(catalog)[0]; //create a variable to store the least expensive toy
    let most = Object.keys(catalog)[0]; //create a variable to store the most expensive toy
    let leastPrice = catalog[least]; //create a variable to store the price of the least expensive toy
    let mostPrice = catalog[most];   //create a variable to store the price of the most expensive toy
    for (let key in catalog) { //loop through the catalog
        if (catalog[key] < leastPrice) { //if the price of the toy is less than the least price
            least = key; //set the least to the toy
            leastPrice = catalog[key]; //set the least price to the price of the toy
        }
        if (catalog[key] > mostPrice) { //if the price of the toy is greater than the most price
            most = key; //set the most to the toy
            mostPrice = catalog[key]; //set the most price to the price of the toy
        }
    }
    return [least, most]; //return the least and most expensive toys
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastAndMostExpensive;
} catch (e) {
    module.exports = null;
}