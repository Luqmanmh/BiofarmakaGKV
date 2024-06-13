google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Provinsi', '2021', '2022'],
        ['ACEH', 1246598, 1039869],
        ['SUMATERA UTARA', 14114104, 7952238],
        ['SUMATERA BARAT', 4354848, 3983213],
        ['RIAU', 1144591, 2169237],
        ['JAMBI', 719965, 697239],
        ['SUMATERA SELATAN', 1741904, 1508873],
        ['BENGKULU', 6313750, 5557880],
        ['LAMPUNG', 942425, 1043983],
        ['KEP. BANGKA BELITUNG', 846065, 490096],
        ['KEP. RIAU', 26378, 29147],
        ['DKI JAKARTA', 600, 560],
        ['JAWA BARAT', 20047217, 13999087],
        ['JAWA TENGAH', 20272747, 22909561],
        ['DI YOGYAKARTA', 3374060, 3287539],
        ['JAWA TIMUR', 82988205, 102772963],
        ['BANTEN', 667836, 821776],
        ['BALI', 5228218, 6466018],
        ['NUSA TENGGARA BARAT', 1401294, 1390452],
        ['NUSA TENGGARA TIMUR', 1366902, 1072882],
        ['KALIMANTAN BARAT', 816783, 756263],
        ['KALIMANTAN TENGAH', 220943, 217295],
        ['KALIMANTAN SELATAN', 2162178, 2273520],
        ['KALIMANTAN TIMUR', 525390, 219214],
        ['KALIMANTAN UTARA', 134099, 180661],
        ['SULAWESI UTARA', 406292, 492677],
        ['SULAWESI TENGAH', 372073, 616584],
        ['SULAWESI SELATAN', 9808610, 11769811],
        ['SULAWESI TENGGARA', 107851, 103856],
        ['GORONTALO', 12085, 18821],
        ['SULAWESI BARAT', 123638, 109786],
        ['MALUKU', 362287, 381061],
        ['MALUKU UTARA', 2106441, 1913055],
        ['PAPUA BARAT', 807076, 229382],
        ['PAPUA', 62437, 24971],
    ]);

    var options = {
        title: 'Total Kunyit Indonesia',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 45,
        },
        backgroundColor: 'transparent',
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out'
        }
    };


    var chart = new google.visualization.ColumnChart(document.getElementById('kunyit'));
    chart.draw(data, options);

}

