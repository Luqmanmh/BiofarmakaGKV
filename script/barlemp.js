google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Provinsi', '2021', '2022'],
        ['ACEH', 154, 26569],
        ['SUMATERA UTARA', 40779, 21393],
        ['SUMATERA BARAT', 2957, 5430],
        ['RIAU', 105736, 1412946],
        ['JAMBI', 11618, 9536],
        ['SUMATERA SELATAN', 20115, 10963],
        ['BENGKULU', 26284, 28544],
        ['LAMPUNG', 181999, 108875],
        ['KEP. BANGKA BELITUNG', 14480, 3850],
        ['KEP. RIAU', 3248, 545],
        ['DKI JAKARTA', 20, 8],
        ['JAWA BARAT', 1197281, 107798],
        ['JAWA TENGAH', 958748, 907798],
        ['DI YOGYAKARTA', 585421, 589724],
        ['JAWA TIMUR', 5096901, 3784797],
        ['BANTEN', 37451, 54156],
        ['BALI', 500, 0],
        ['NUSA TENGGARA BARAT', 41435, 23792],
        ['NUSA TENGGARA TIMUR', 8093, 4],
        ['KALIMANTAN BARAT', 14129, 25172],
        ['KALIMANTAN TENGAH', 31165, 8913],
        ['KALIMANTAN SELATAN', 1744, 1320],
        ['KALIMANTAN TIMUR', 6864, 6205],
        ['KALIMANTAN UTARA', 1193, 5038],
        ['SULAWESI UTARA', 2, 0],
        ['SULAWESI TENGAH', 1623, 13996],
        ['SULAWESI SELATAN', 13140, 27878],
        ['SULAWESI TENGGARA', 4545, 2012],
        ['GORONTALO', 0, 0],
        ['SULAWESI BARAT', 8810, 15383],
        ['MALUKU', 1637, 1634],
        ['MALUKU UTARA', 0, 0],
        ['PAPUA BARAT', 1298, 2460],
        ['PAPUA', 9319, 12869],
    ]);

    var options = {
            title: 'Total Lempuyangan Indonesia',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 45,
        }
    };


    var chart = new google.visualization.ColumnChart(document.getElementById('lemp')); 
    chart.draw(data, options);
    
}

