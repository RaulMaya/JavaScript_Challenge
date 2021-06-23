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

  //No Filters Filled
  if (dateValue === "" && cityValue === "" && stateValue === "" && countryValue === "" && shapeValue === "") {
    data.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //All Filters Filled
  if (dateValue !== "" && cityValue !== "" && stateValue !== "" && countryValue !== "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.city === cityValue && sights.state === stateValue && sights.country === countryValue && sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //Individual Filled

  if (dateValue !== "" && cityValue === "" && stateValue === "" && countryValue === "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  if (dateValue === "" && cityValue !== "" && stateValue === "" && countryValue === "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.city === cityValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  if (dateValue === "" && cityValue === "" && stateValue !== "" && countryValue === "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.state === stateValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  if (dateValue === "" && cityValue === "" && stateValue === "" && countryValue !== "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.country === countryValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  if (dateValue === "" && cityValue === "" && stateValue === "" && countryValue === "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  // 2 Combinations Filters

  //Date-City
  if (dateValue !== "" && cityValue !== "" && stateValue === "" && countryValue === "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.city === cityValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //Date-State
  if (dateValue !== "" && cityValue === "" && stateValue !== "" && countryValue === "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.state === stateValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //Date-Country
  if (dateValue !== "" && cityValue === "" && stateValue === "" && countryValue !== "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.country === countryValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //Date-Shape
  if (dateValue !== "" && cityValue === "" && stateValue === "" && countryValue === "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //City-State
  if (dateValue === "" && cityValue !== "" && stateValue !== "" && countryValue === "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.city === cityValue && sights.state === stateValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //City-Country
  if (dateValue === "" && cityValue !== "" && stateValue === "" && countryValue !== "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.city === cityValue && sights.country === countryValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //City-Shape
  if (dateValue === "" && cityValue !== "" && stateValue === "" && countryValue === "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.city === cityValue && sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //State-Country
  if (dateValue === "" && cityValue === "" && stateValue !== "" && countryValue !== "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.state === stateValue && sights.country === countryValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //State-Shape
  if (dateValue === "" && cityValue === "" && stateValue !== "" && countryValue === "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.state === stateValue && sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

//Country-Shape
  if (dateValue === "" && cityValue === "" && stateValue === "" && countryValue !== "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.shape === shapeValue && sights.country === countryValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  // 3 Combinations
  // 4 Combinations

  //Date Out
  if (dateValue === "" && cityValue !== "" && stateValue !== "" && countryValue !== "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.city === cityValue && sights.state === stateValue && sights.country === countryValue && sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //City Out
  if (dateValue !== "" && cityValue === "" && stateValue !== "" && countryValue !== "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.state === stateValue && sights.country === countryValue && sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //State Out
  if (dateValue !== "" && cityValue !== "" && stateValue === "" && countryValue !== "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.city === cityValue && sights.country === countryValue && sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //Country Out
  if (dateValue !== "" && cityValue !== "" && stateValue !== "" && countryValue === "" && shapeValue !== "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.city === cityValue && sights.state === stateValue && sights.shape === shapeValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }

  //Shape Out
  if (dateValue !== "" && cityValue !== "" && stateValue !== "" && countryValue !== "" && shapeValue === "") {
    var filterDate = tableData.filter(sights =>sights.datetime === dateValue && sights.city === cityValue && sights.state === stateValue && sights.country === countryValue);
      // Print the value to the console
    filterDate.forEach((element) => {
      var row = tbody.append("tr");
      Object.values(element).forEach((value)=>{
        row.append("td").text(value);
      })
    });
  }
}
