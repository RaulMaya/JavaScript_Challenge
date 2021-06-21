// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((element) => {
  var row = tbody.append("tr");
  Object.values(element).forEach((value)=>{
    row.append("td").text(value);
  })
});
