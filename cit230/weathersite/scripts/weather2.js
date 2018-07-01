var greenRequest = new XMLHttpRequest();
greenRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=e442dd1a81e49c900fae77211c3d0018&units=imperial', true);


setTimeout(function(){
    greenRequest.send();
}, 500)
greenRequest.onload = function() {
    var greenInfo = JSON.parse(greenRequest.responseText);
    console.log(greenInfo);

    document.getElementById("high").innerHTML = greenInfo.main.temp_max;
    document.getElementById("low").innerHTML = greenInfo.main.temp_min;
    document.getElementById("currentTemp").innerHTML = greenInfo.main.temp;
    document.getElementById("description").innerHTML = greenInfofrankInfo.weather[0].description;
    document.getElementById("speed").innerHTML = greenInfo.wind.speed;
    document.getElementById("icon").src = "http://openweathermap.org/img/w/01d.png"
}
