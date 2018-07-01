var frankRequest = new XMLHttpRequest();
frankRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=e442dd1a81e49c900fae77211c3d0018&units=imperial', true);


setTimeout(function(){
    frankRequest.send();
}, 500)

frankRequest.onload = function() {
    var frankInfo = JSON.parse(frankRequest.responseText);
    console.log(frankInfo);

    document.getElementById("high").innerHTML = frankInfo.main.temp_max;
    document.getElementById("low").innerHTML = frankInfo.main.temp_min;
    document.getElementById("currentTemp").innerHTML = frankInfo.main.temp;
    document.getElementById("description").innerHTML = frankInfo.weather[0].description;
    document.getElementById("speed").innerHTML = frankInfo.wind.speed;
    document.getElementById("icon").src = "http://openweathermap.org/img/w/01d.png"
}
