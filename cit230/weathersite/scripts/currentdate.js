 window.onload = function() {
 var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var months = ["January","February","March","April","May",
    "June","July","August","September","October","November","December"];
    
    var n = weekday[d.getDay()];
    var o = d.getDate();
    var w = months[d.getMonth()];
    var t = d.getFullYear();

    document.getElementById("currentdate").innerHTML = n + ", " + o + " " + w + " " + t;
}