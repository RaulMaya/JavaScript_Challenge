// from data.js
var tableData = data;

// Select the button and the form
var button = d3.select("#button");
var form = d3.select("#form");

// Creating the event handlers
button.on("click", runEnter);
form.on("submit", runEnter)

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((element) => {
  var row = tbody.append("tr");
  Object.values(element).forEach((value)=>{
    row.append("td").text(value);
  })
});
