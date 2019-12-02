// a memory location that never changes
const BASE_URL = "https://zagster-service.herokuapp.com"
// const PI = 3.14159

// // jQuery command. Wait until we page loads call funtion whose name is in ()
// //function call means run the code
$(updateGraph)
// $(greeter("Nick's"))

// call function add (use it - make it run) 
// add(2, 3);
// // greeter is the function identifier, anem is the fucntions argument (info it need to do its job)
// function add(num1, num2){
//     answer = num1 + num2;
//     console.log("The answer is: " + answer);
//     return answer;
// }
// function greeter(name){
//     alert("Welcome to " + name + " data visualization")
// }


// var person = {name: "Nick", age: 20, care: {model: "Mitsubishi", year: 1999} }
// console.log ("My name is " + person.name)
// console.log ("My age is " + person.age)
// console.log ("My car model is " + person.care.model)

// if (person.age < 300){
//     alert("you're young!")
// }

var data = {"2016":[{"9":220}, {"10":141}, {"11":89}, {"12":16}]}
var year_list = data[2016]
console.log('year list is ' + year_list)

console.log(year_list[0][9])
console.log(year_list[1][10])
console.log(year_list[2][11])
console.log(year_list[3][12])
function updateView() {
    alert("Data Visualization Project")
}

$(updateView)

let years = []
let months2016 = []
let months2017 = []
let months2018 = []

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)

    $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear),)
    .then(updateChart);
}

function perYear(data) {
    for (var index = 0, month=9; index <= 3, month<=12; ++index, ++month){
        months2016.push(data[2016] [index] [month])
    }
    console.log("2016 data by months is easy " + months2016)

    for (var index = 0, month=1; index <= 11, month<=12; ++index, ++month){
        months2016.push(data[2017] [index] [month])
    }
    console.log("2017 data by months is easy " + months2017)

    for (var index = 0, month=1; index <=data.length, month<=10; ++index, ++month){
        months2016.push(data[2018] [index] [month])
    }
    console.log("2018 data by months is easy " + months2018)
}
// function updateView() {
//     $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
//   }
  
  function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
    console.log(numberOfRides);
  }


//   google.charts.load('current', {'packages':['corechart']});

//   google.charts.setOnLoadCallback(drawwinterchart);
//   google.charts.setOnLoadCallback(drawsummerchart);
//   google.charts.setOnLoadCallback(drawfallchart);
//   google.charts.setOnLoadCallback(drawspringchart);

//   function drawwinterchart() {


//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Memberships');
//     data.addColumn('number', 'Total');
//     data.addRows([
//       ['Students', 3],
//       ['Others', 1],
//     ]);


//     var options = {title:'Total Rides from November to January',
//                    width:400,
//                    height:300};


//     var chart = new google.visualization.PieChart(document.getElementById('Winterdiv'));
//     chart.draw(data, options);
//   }


//   function drawsummerchart() {


//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Memberships');
//     data.addColumn('number', 'Total');
//     data.addRows([
//       ['Students', 4],
//       ['Others', 2],
//     ]);


//     var options = {title:'Total Rides from June to August',
//                    width:400,
//                    height:300};


//     var chart = new google.visualization.PieChart(document.getElementById('Summerdiv'));
//     chart.draw(data, options);
//   }

//   function drawfallchart() {


//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Memberships');
//     data.addColumn('number', 'Total');
//     data.addRows([
//       ['Students', 4],
//       ['Others', 2],
//     ]);


//     var options = {title:'Total Rides from June to August',
//                    width:400,
//                    height:300};


//     var chart = new google.visualization.PieChart(document.getElementById('Falldiv'));
//     chart.draw(data, options);
//   }

//   function drawspringchart() {


//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Memberships');
//     data.addColumn('number', 'Total');
//     data.addRows([
//       ['Students', 4],
//       ['Others', 2],
//     ]);


//     var options = {title:'Total Rides from June to August',
//                    width:400,
//                    height:300};


//     var chart = new google.visualization.PieChart(document.getElementById('Springdiv'));
//     chart.draw(data, options);
//   }

function updateGraph() { 
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
}