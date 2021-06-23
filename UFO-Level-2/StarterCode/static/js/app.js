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

  d3.select('tbody').html('')

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateElement = d3.select("#datetime");
  var cityElement = d3.select("#city");
  var stateElement = d3.select("#state");
  var countryElement = d3.select("#country");
  var shapeElement = d3.select("#shape");

  // Get the value property of the input element
  var dateValue = dateElement.property("value");
  var cityValue = cityElement.property("value");
  var stateValue = stateElement.property("value");
  var countryValue = countryElement.property("value");
  var shapeValue = shapeElement.property("value");

  console.log(dateValue)
  console.log(cityValue)
  console.log(stateValue)
  console.log(countryValue)
  console.log(shapeValue)

  if (dateValue === "" ){
    data.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  } else {
    var filterDate = tableData.filter(sights => sights.datetime === dateValue);
    // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }
}
