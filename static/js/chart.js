//var us_covid_19_array= {{us_covid_19|tojson}};
var date =[];
var total_cases=[];
var total_death=[];
us_covid_19_array.forEach(element => {
          date.push(element[0])
          total_cases.push(element[1])
          total_death.push(element[4])
        });
var trace1= {
           x: date,
           y: total_cases,
           type: 'line'
         };
var trace2={
           x:date,
           y:total_death,
           type:'line'
         };

var data=[trace1];

var layout ={
           title: "Total US Covid 19 Cases by Date"
         };

Plotly.newPlot("plot1",data,layout);

data=[trace2];

layout={
           title:"Total US Covid 19 Deaths by Date"
         };

Plotly.newPlot("plot2",data,layout);