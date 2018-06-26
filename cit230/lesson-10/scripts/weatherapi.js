var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=e442dd1a81e49c900fae77211c3d0018&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function() {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);

    document.getElementById("current-temp").innerHTML = weatherInfo.main.temp;
}