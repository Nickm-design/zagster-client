$(updateView)

function updateView() {
    alert("Data Visualization Project")
}


  google.charts.load('current', {'packages':['corechart']});

  google.charts.setOnLoadCallback(drawwinterchart);
  google.charts.setOnLoadCallback(drawspringchart);
  google.charts.setOnLoadCallback(drawsummerchart);

  function drawwinterchart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Memberships');
    data.addColumn('number', 'Total');
    data.addRows([
      ['Students', 3],
      ['Others', 1],
    ]);


    var options = {title:'Total Rides in Winter',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('Winterdiv'));
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


    var options = {title:'Total Rides in Spring',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('Springdiv'));
    chart.draw(data, options);
  }

  function drawsummerchart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Memberships');
    data.addColumn('number', 'Total');
    data.addRows([
      ['Students', 8],
      ['Others', 5],
    ]);


    var options = {title:'Total Rides in Summer',
                   width:400,
                   height:300};


    var chart = new google.visualization.PieChart(document.getElementById('Summerdiv'));
    chart.draw(data, options);
  }