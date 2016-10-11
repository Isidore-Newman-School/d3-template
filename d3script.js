// create svg in HTML body
var svg = d3.select("body").append("svg");

// add a circle to the svg
svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 50)
  .attr("r", 30);
  
// now we want 4 circles- one for each item in the data array
svg.selectAll("circle")
   .data([32, 17, 30, 12])
   .enter()
   .append("circle")
   .attr("cx", function(d, i) { return i*60 + 100; })
   .attr("cy", 50)
   .attr("r", function(d, i) { return d; } );
   
// why not make all the circles blue?   
svg.selectAll("circle").style("fill", "steelblue");