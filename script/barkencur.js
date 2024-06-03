google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Provinsi', '2021', '2022'],
        ['ACEH', 271305, 169916],
        ['SUMATERA UTARA', 1345654, 1174808],
        ['SUMATERA BARAT', 1195254, 591037],
        ['RIAU', 1249820, 820610],
        ['JAMBI', 215273, 264647],
        ['SUMATERA SELATAN', 913895, 1526659],
        ['BENGKULU', 1730560, 1449968],
        ['LAMPUNG', 5757467, 5413628],
        ['KEP. BANGKA BELITUNG', 647319, 383800],
        ['KEP. RIAU', 9202, 9596],
        ['DKI JAKARTA', 333, 392],
        ['JAWA BARAT', 9791218, 13369813],
        ['JAWA TENGAH', 15612280, 14777968],
        ['DI YOGYAKARTA', 1874687, 2675173],
        ['JAWA TIMUR', 3573890, 2840700],
        ['BANTEN', 1748971, 1664607],
        ['BALI', 665072, 353391],
        ['NUSA TENGGARA BARAT', 59277, 352871],
        ['NUSA TENGGARA TIMUR', 216059, 159558],
        ['KALIMANTAN BARAT', 335730, 274863],
        ['KALIMANTAN TENGAH', 110430, 121373],
        ['KALIMANTAN SELATAN', 5550994, 2794624],
        ['KALIMANTAN TIMUR', 136080, 129305],
        ['KALIMANTAN UTARA', 47549, 52534],
        ['SULAWESI UTARA', 12745, 8456],
        ['SULAWESI TENGAH', 511939, 344840],
        ['SULAWESI SELATAN', 251133, 232415],
        ['SULAWESI TENGGARA', 16626, 69072],
        ['GORONTALO', 2813, 812],
        ['SULAWESI BARAT', 67822, 43935],
        ['MALUKU', 57435, 129462],
        ['MALUKU UTARA', 329600, 225546],
        ['PAPUA BARAT', 64764, 39312],
        ['PAPUA', 35413, 11534],
    ]);

    var options = {
        title: 'Total Kencur Indonesia',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 45,
        }
    };


    var chart = new google.visualization.ColumnChart(document.getElementById('kencur'));
    chart.draw(data, options);

}

