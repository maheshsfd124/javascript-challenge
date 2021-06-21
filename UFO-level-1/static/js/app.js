// // from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
function displayUfos(ufosDisplay) {
tbody.text("");   
data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

displayUfos(tableData);

var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#myform");

// Create event handlers 
button.on("click",  searchDate);
form.on("submit", searchDate);

// Complete the event handler function for the form
function searchDate() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");


  var filtered= tableData.filter(tableData => tableData.datetime === inputValue);

  displayUfos(filtered);
}

 
// var button = d3.select("#filter-btn");
// var form = d3.select("form");

// button.on("click", runEnter);
// form.on("submit", runEnter);

// function runEnter() {
//   d3.event.preventDefault();
//   tbody.html("")
//   var inputElement = d3.select("#datetime");
//   var inputValue = inputElement.property("value");
//   var filteredData = tableData.filter(table => table.datetime === inputValue);
//   displayUfos(filteredData);
// }