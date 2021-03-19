// Create
var myPetsArray = ["Dog", "Cat"];
// End o
function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  // Only c
  myNewPets.push("Bird", "Fish");
  var firstPet = myNewPets.shift();
  var lastPet = myNewPets.pop();
  myNewPets.unshift("Lion");
  console.log(firstPet);
  console.log(lastPet);
  return myNewPets;
  // Only
}

console.log(myArrayFunction(myPetsArray)); // Change
module.exports = myArrayFunction;