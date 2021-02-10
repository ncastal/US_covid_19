var x = document.getElementById("state");

states.forEach(element => {
    var option = document.createElement("option");
    option.text = element;
    option.value=element;
    x.add(option)
});

function myFunction() {
    var y=document.getElementById("state").value;
    console.log(y);

    var filter_state = states_covid_array.filter(function (entry){
        return entry[1] === y;
    });
    
    var date_state=[];
    var total_cases_state=[];
    var total_death_state=[]

    filter_state.forEach(element =>{
        date_state.push(element[0])
        total_cases_state.push(element[2])
        total_death_state.push(element[5])
    });

    var trace3={
        x:date_state,
        y:total_cases_state,
        type:'line',
        name:'Cases'
    };

    var trace4={
        x:date_state,
        y:total_death_state,
        type:'line',
        name:'Deaths'
    };

    var data=[trace3];

    var layout ={
        title: "Total "+ y + " Covid 19 Cases by Date"
      };

    Plotly.newPlot('plot3',data,layout);

    data=[trace4];
    layout={
        title: "Total " +y+ " Covid 19 Deaths by Date"
    };

    Plotly.newPlot('plot4',data,layout)
};