var springRequest = new XMLHttpRequest();
springRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=e442dd1a81e49c900fae77211c3d0018&units=imperial', true);


springRequest.send();

springRequest.onload = function() {
    var springInfo = JSON.parse(springRequest.responseText);
    console.log(springInfo);

    document.getElementById("high").innerHTML = springInfo.main.temp_max;
    document.getElementById("low").innerHTML = springInfo.main.temp_min;
    document.getElementById("currentTemp").innerHTML = springInfo.main.temp;
    document.getElementById("description").innerHTML = springInfo.weather[0].description;
    document.getElementById("speed").innerHTML = springInfo.wind.speed;
    document.getElementById("icon").src = "http://openweathermap.org/img/w/01d.png"
}
