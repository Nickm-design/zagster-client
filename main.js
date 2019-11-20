const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateGraph)



function updateView() {
    alert("Data Visualization Project")
}

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
  }
  
  function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
    console.log(numberOfRides);
  }


  google.charts.load('current', {'packages':['corechart']});

  google.charts.setOnLoadCallback(drawwinterchart);
  google.charts.setOnLoadCallback(drawsummerchart);
  google.charts.setOnLoadCallback(drawfallchart);
  google.charts.setOnLoadCallback(drawspringchart);

  function drawwinterchart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Memberships');
    data.addColumn('number', 'Total');
    data.addRows([
      ['Students', 3],
      ['Others', 1],
    ]);


    var options = {title:'Total Rides from November to January',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('Winterdiv'));
    chart.draw(data, options);
  }


  function drawsummerchart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Memberships');
    data.addColumn('number', 'Total');
    data.addRows([
      ['Students', 4],
      ['Others', 2],
    ]);


    var options = {title:'Total Rides from June to August',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('Summerdiv'));
    chart.draw(data, options);
  }

  function drawfallchart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Memberships');
    data.addColumn('number', 'Total');
    data.addRows([
      ['Students', 4],
      ['Others', 2],
    ]);


    var options = {title:'Total Rides from June to August',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('Falldiv'));
    chart.draw(data, options);
  }

  function drawspringchart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Memberships');
    data.addColumn('number', 'Total');
    data.addRows([
      ['Students', 4],
      ['Others', 2],
    ]);


    var options = {title:'Total Rides from June to August',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('Springdiv'));
    chart.draw(data, options);
  }

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