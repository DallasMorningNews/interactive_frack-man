$(document).ready(function(){function t(t,a){var n=$("#chart-wrapper").width(),e=300,r=d3.scale.linear().domain([0,d3.max(t,function(t){return t.dollars})]).range([0,n]),c=d3.scale.ordinal().domain(d3.range(t.length)).rangeRoundBands([0,e],.5),l=d3.select(a).append("svg").attr("width",n).attr("height",e).attr("id","chart");l.selectAll("rect").data(t).enter().append("rect").attr("x",function(t){return r(0)}).attr("y",function(t,a){return c(a)}).attr("width",function(t){return r(t.dollars)}).attr("height",c.rangeBand()).attr("fill","black"),l.selectAll("text").data(t).enter().append("text").text(function(t){return t.name}).attr("x",function(t){return r(0)}).attr("y",function(t,a){return c(a)}).attr("class","labels")}var a=[];$.getJSON("js/data.json",function(n){a=n,t(a,"#chart-wrapper")}),$(window).resize(function(){setTimeout(function(){chartWidth=$("#chart-wrapper").width(),$("#chart").remove(),t(a,"#chart-wrapper")},250)}),$("#panel3").on("click",function(){$("#panel2").animate({left:"3%"}),$("#panel3").animate({left:"6%"}),$("#tab1, #tab2").css("background-color","#333333"),$("#tab3").css("background-color","#e34e36")}),$("#panel2").on("click",function(){$("#panel2").animate({left:"3%"}),$("#panel3").animate({left:"97%"}),$("#tab1, #tab3").css("background-color","#333333"),$("#tab2").css("background-color","#e34e36")}),$("#panel1").on("click",function(){$("#panel2").animate({left:"94%"}),$("#panel3").animate({left:"97%"}),$("#tab2, #tab3").css("background-color","#333333"),$("#tab1").css("background-color","#e34e36")});var n=new Date,e=n.getFullYear();$(".copyright").text(e)});
//# sourceMappingURL=scripts-bundle.js.map
