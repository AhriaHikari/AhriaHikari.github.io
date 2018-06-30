var statRequest = new XMLHttpRequest();
statRequest.open('GET','https://byui-cit230.github.io/weather/data/towndata.json', true);


statRequest.send();

statRequest.onload = function() {
    var statInfo = JSON.parse(statRequest.responseText);
    console.log(statInfo);

    document.getElementById("frankName").innerHTML = statInfo.towns[0].name;
    document.getElementById("frankMotto").innerHTML = statInfo.towns[0].motto;
    document.getElementById("frankYear").innerHTML = statInfo.towns[0].yearFounded;
    document.getElementById("frankPop").innerHTML = statInfo.towns[0].currentPopulation;
    document.getElementById("frankRain").innerHTML = statInfo.towns[0].averageRainfall;
    document.getElementById("greenName").innerHTML = statInfo.towns[1].name;
    document.getElementById("greenMotto").innerHTML = statInfo.towns[1].motto;
    document.getElementById("greenYear").innerHTML = statInfo.towns[1].yearFounded;
    document.getElementById("greenPop").innerHTML = statInfo.towns[1].currentPopulation;
    document.getElementById("greenRain").innerHTML = statInfo.towns[1].averageRainfall;
    document.getElementById("springName").innerHTML = statInfo.towns[3].name;
    document.getElementById("springMotto").innerHTML = statInfo.towns[3].motto;
    document.getElementById("springYear").innerHTML = statInfo.towns[3].yearFounded;
    document.getElementById("springPop").innerHTML = statInfo.towns[3].currentPopulation;
    document.getElementById("springRain").innerHTML = statInfo.towns[3].averageRainfall;
}