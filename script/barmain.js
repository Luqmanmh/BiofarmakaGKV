google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', '2021', '2022'],
        ['Jahe', 307241517, 247455487],
        ['Laos/Lengkuas', 76745335, 66312671],
        ['Kencur', 54408609, 52477225],
        ['Kunyit', 184825890, 196499570],
        ['Lempuyang', 8428689, 7219608],
        ['Temulawak', 32282031, 28099702],
        ['Temuireng', 6519135, 5051749],
    ]);

    var options = {
        title: 'Total Tanaman Biofarmaka Seluruh Indonesia',
        backgroundColor: 'transparent',
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out'
        }
    };


    var chart = new google.visualization.ColumnChart(document.getElementById('id')); 
    chart.draw(data, options);
    
}