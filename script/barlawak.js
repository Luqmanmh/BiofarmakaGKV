google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Provinsi', '2021', '2022'],
        ['ACEH', 17418, 724],
        ['SUMATERA UTARA', 180468, 37462],
        ['SUMATERA BARAT', 132735, 36086],
        ['RIAU', 91721, 209589],
        ['JAMBI', 33167, 25844],
        ['SUMATERA SELATAN', 74418, 73876],
        ['BENGKULU', 19588, 33666],
        ['LAMPUNG', 243310, 210221],
        ['KEP. BANGKA BELITUNG', 23995, 4982],
        ['KEP. RIAU', 1933, 1330],
        ['DKI JAKARTA', 308, 140],
        ['JAWA BARAT', 89692, 119970],
        ['JAWA TENGAH', 5512125, 4251573],
        ['DI YOGYAKARTA', 1485949, 1453450],
        ['JAWA TIMUR', 23111308, 20816841],
        ['BANTEN', 24867, 31985],
        ['BALI', 7098, 13784],
        ['NUSA TENGGARA BARAT', 51779, 56825],
        ['NUSA TENGGARA TIMUR', 201860, 148163],
        ['KALIMANTAN BARAT', 65835, 50823],
        ['KALIMANTAN TENGAH', 18012, 18062],
        ['KALIMANTAN SELATAN', 390023, 151095],
        ['KALIMANTAN TIMUR', 75920, 50173],
        ['KALIMANTAN UTARA', 54788, 40285],
        ['SULAWESI UTARA', 50774, 25799],
        ['SULAWESI TENGAH', 34049, 99474],
        ['SULAWESI SELATAN', 45182, 37275],
        ['SULAWESI TENGGARA', 32774, 21610],
        ['GORONTALO', 0, 0],
        ['SULAWESI BARAT', 4576, 2257],
        ['MALUKU', 987, 203],
        ['MALUKU UTARA', 155364, 43560],
        ['PAPUA BARAT', 36728, 21389],
        ['PAPUA', 13280, 11186],
    ]);

    var options = {
            title: 'Total Temulawak Indonesia',
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


    var chart = new google.visualization.ColumnChart(document.getElementById('lawak')); 
    chart.draw(data, options);
    
}

