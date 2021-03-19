// Only
var myNestedArray = [["Toblerone", 5], ["Milka", 3]];
function myNestedFunction(arr) {
    myNestedArray = [...arr];
    return myNestedArray;
}
// Only
console.log(myNestedFunction(myNestedArray)); // Change
module.exports = myNestedFunction;