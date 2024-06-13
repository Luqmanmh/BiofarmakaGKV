google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Provinsi', '2021', '2022'],
        ['ACEH', 612026, 491312],
        ['SUMATERA UTARA', 1099804, 893906],
        ['SUMATERA BARAT', 3589529, 2327641],
        ['RIAU', 596679, 779474],
        ['JAMBI', 712901, 787701],
        ['SUMATERA SELATAN', 1183599, 1323744],
        ['BENGKULU', 2979195, 1833805],
        ['LAMPUNG', 918785, 1124748],
        ['KEP. BANGKA BELITUNG', 1011835, 714654],
        ['KEP. RIAU', 72796, 66290],
        ['DKI JAKARTA', 1657, 1000],
        ['JAWA BARAT', 19385851, 17984286],
        ['JAWA TENGAH', 13035571, 14479924],
        ['DI YOGYAKARTA', 1225027, 1222612],
        ['JAWA TIMUR', 16303036, 8639144],
        ['BANTEN', 2635336, 3210934],
        ['BALI', 217370, 353042],
        ['NUSA TENGGARA BARAT', 897798, 837989],
        ['NUSA TENGGARA TIMUR', 1013628, 953754],
        ['KALIMANTAN BARAT', 447500, 492400],
        ['KALIMANTAN TENGAH', 339305, 323853],
        ['KALIMANTAN SELATAN', 913078, 927814],
        ['KALIMANTAN TIMUR', 274326, 294401],
        ['KALIMANTAN UTARA', 1691682, 739134],
        ['SULAWESI UTARA', 97725, 75846],
        ['SULAWESI TENGAH', 306776, 513883],
        ['SULAWESI SELATAN', 3293700, 3059302],
        ['SULAWESI TENGGARA', 196032, 156949],
        ['GORONTALO', 0, 0],
        ['SULAWESI BARAT', 99144, 78336],
        ['MALUKU', 257758, 360986],
        ['MALUKU UTARA', 1176955, 1163088],
        ['PAPUA BARAT', 74862, 63104],
        ['PAPUA', 84069, 37615],
    ]);

    var options = {
            title: 'Total Laos Indonesia',
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


    var chart = new google.visualization.ColumnChart(document.getElementById('laos')); 
    chart.draw(data, options);
    
}

