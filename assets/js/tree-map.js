var margin={top:40,right:10,bottom:10,left:10},width=960-margin.left-margin.right,height=500-margin.top-margin.bottom,color=d3.scale.category20c(),treemap=d3.layout.treemap().size([width,height]).sticky(!0).value(function(t){return t.size}),div=d3.select("#chart").append("div").style("position","relative").style("width",width+margin.left+margin.right+"px").style("height",height+margin.top+margin.bottom+"px").style("left",margin.left+"px").style("top",margin.top+"px");function position(){this.style("left",function(t){return t.x+"px"}).style("top",function(t){return t.y+"px"}).style("width",function(t){return Math.max(0,t.dx-1)+"px"}).style("height",function(t){return Math.max(0,t.dy-1)+"px"})}d3.json("./assets/data/curriculum.json",function(t,n){var e=div.datum(n).selectAll(".node").data(treemap.nodes).enter().append("div").attr("class","node").call(position).style("background",function(t){return t.children?color(t.name):null}).text(function(t){return t.children?null:t.name});d3.selectAll("input").on("change",function t(){var n="count"===this.value?function(){return 1}:function(t){return t.size};e.data(treemap.value(n).nodes).transition().duration(1500).call(position)})});