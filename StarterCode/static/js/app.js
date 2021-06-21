// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);


var tbody = d3.select("tbody");

data.forEach((element) => {
  var row = tbody.append("tr");
  Object.values(element).forEach((value)=>{
    row.append("td").text(value);
  })
});

// Create the function to run for both events
function runEnter() {
  $("#table_of_items tr").remove(); 
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateElement = d3.select("#datetime");

  // Get the value property of the input element
  var dateValue = dateElement.property("value");

  var filterDate = tableData.filter(sights => sights.datetime === dateValue);
  // Print the value to the console
  filterDate.forEach((element) => {
    var row = tbody.append("tr");
    Object.values(element).forEach((value)=>{
      row.append("td").text(value);
    })
  });

}
