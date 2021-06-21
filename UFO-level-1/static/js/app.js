// // from data.js
var tableData = data;

// YOUR CODE HERE!

function displayUfos(ufosDisplay) {
  var tbody = d3.select("tbody");
  tbody.html("");
  ufosDisplay.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
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
button.on("click", searchDate);
form.on("submit", searchDate);

// Complete the event handler function for the form
function searchDate() {
 
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filtered = tableData.filter((ufo) => ufo.datetime === inputValue);

  displayUfos(filtered);
}
