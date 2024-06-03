google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Provinsi', '2021', '2022'],
        ['ACEH', 2327504, 2769195],
        ['SUMATERA UTARA', 52245300, 31250115],
        ['SUMATERA BARAT', 13772833, 7213111],
        ['RIAU', 1327441, 2175788],
        ['JAMBI', 2813725, 2553195],
        ['SUMATERA SELATAN', 1868042, 2062736],
        ['BENGKULU', 16173807, 16703709],
        ['LAMPUNG', 4085442, 3826072],
        ['KEP. BANGKA BELITUNG', 721573, 650686],
        ['KEP. RIAU', 22960, 35157],
        ['DKI JAKARTA', 1632, 1377],
        ['JAWA BARAT', 43833254, 54741570],
        ['JAWA TENGAH', 39087220, 45309562],
        ['DI YOGYAKARTA', 5120703, 4969766],
        ['JAWA TIMUR', 27595251, 31456739],
        ['BANTEN', 1926635, 2678077],
        ['BALI', 2903556, 5757638],
        ['NUSA TENGGARA BARAT', 932036, 2138322],
        ['NUSA TENGGARA TIMUR', 1625741, 1463421],
        ['KALIMANTAN BARAT', 2772531, 3805897],
        ['KALIMANTAN TENGAH', 592731, 637917],
        ['KALIMANTAN SELATAN', 7139996, 4083940],
        ['KALIMANTAN TIMUR', 2441371, 1140389],
        ['KALIMANTAN UTARA', 657717, 653066],
        ['SULAWESI UTARA', 1547914, 2036404],
        ['SULAWESI TENGAH', 643341, 1201645],
        ['SULAWESI SELATAN', 60793383, 10464984],
        ['SULAWESI TENGGARA', 922195, 332246],
        ['GORONTALO', 15801, 18557],
        ['SULAWESI BARAT', 144894, 229090],
        ['MALUKU', 665819, 504590],
        ['MALUKU UTARA', 10202830, 4426649],
        ['PAPUA BARAT', 203323, 93775],
        ['PAPUA', 113016, 70102],
    ]);

    var options = {
        title: 'Total jahe Indonesia',
        hAxis: {
            slantedText: true,
            slantedTextAngle: 45,
        }
    };


    var chart = new google.visualization.ColumnChart(document.getElementById('jahe'));
    chart.draw(data, options);

}

