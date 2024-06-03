google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Provinsi', '2021', '2022'],
        ['ACEH', 0, 0],
        ['SUMATERA UTARA', 4412, 2806],
        ['SUMATERA BARAT', 3345, 1622],
        ['RIAU', 18283, 17217],
        ['JAMBI', 15095, 10855],
        ['SUMATERA SELATAN', 28907, 57530],
        ['BENGKULU', 1383, 1814],
        ['LAMPUNG', 110332, 108066],
        ['KEP. BANGKA BELITUNG', 5000, 0],
        ['KEP. RIAU', 1717, 0],
        ['DKI JAKARTA', 50, 25],
        ['JAWA BARAT', 21558, 18862],
        ['JAWA TENGAH', 1134815, 936241],
        ['DI YOGYAKARTA', 766561, 754737],
        ['JAWA TIMUR', 4163118, 2977873],
        ['BANTEN', 7329, 973],
        ['BALI', 4, 4],
        ['NUSA TENGGARA BARAT', 3175, 2743],
        ['NUSA TENGGARA TIMUR', 69400, 6813],
        ['KALIMANTAN BARAT', 21707, 37637],
        ['KALIMANTAN TENGAH', 5681, 5882],
        ['KALIMANTAN SELATAN', 112, 154],
        ['KALIMANTAN TIMUR', 80839, 65162],
        ['KALIMANTAN UTARA', 6904, 8675],
        ['SULAWESI UTARA', 0, 0],
        ['SULAWESI TENGAH', 4251, 11380],
        ['SULAWESI SELATAN', 773, 302],
        ['SULAWESI TENGGARA', 14955, 13874],
        ['GORONTALO', 0, 0],
        ['SULAWESI BARAT', 0, 0],
        ['MALUKU', 2679, 12],
        ['MALUKU UTARA', 17404, 0],
        ['PAPUA BARAT', 470, 1386],
        ['PAPUA', 8876, 9104],
    ]);

    var options = {
        title: 'Total Temuireng Indonesia',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 45,
        }
    };


    var chart = new google.visualization.ColumnChart(document.getElementById('hitam'));
    chart.draw(data, options);

}

