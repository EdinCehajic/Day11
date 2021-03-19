// Create 
var myArr = [2, 4, 0, 8, 10];
// End 
function myArrayFunction(arr) {
  var myItems = [...arr];
  // Only 
  myItems[2] = 6;
  return myItems;
  // Only 
}
console.log(myArrayFunction(myArr)); // Change
module.exports = myArrayFunction;