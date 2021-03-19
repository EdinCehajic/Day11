// Create
var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];
// End
function myMonitorsFunction(arr) {
  var newMonitorsList = [];

  // Only

  for (i = 0; i < arr.length; i++) {
    newMonitorsList.push([arr[i], i + 1]);
  }

  return newMonitorsList;
  // Only
}
console.log(myMonitorsFunction(monitorsListArray)); // Change

module.exports = myMonitorsFunction;