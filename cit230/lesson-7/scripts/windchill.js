var h = parseFloat(document.getElementById("high").textContent);
var l = parseFloat(document.getElementById("low").textContent);
var t = (h + l) / 2;
var s = parseFloat(document.getElementById("speed").textContent);
var c = windChill(t,s);
document.getElementById("chill").innerHTML= c.toFixed(2);

function windChill(t,s){
    return 35.74 + .6215 * t - 35.75 * Math.pow(s, .16) 
    + .4275 * t * Math.pow(s, .16);
}
