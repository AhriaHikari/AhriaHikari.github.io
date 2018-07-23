var main = document.querySelector('main');

var requestURL = 'https://ahriahikari.github.io/cit230/final/data/service.json';
var request = new XMLHttpRequest();
request.responseType = 'json';
request.send();
request.onload = function() {
    var repairBike = request.response;
    showRepairs(repairBike);
}

function showRepairs(jsonObj) {
    var serve = jsonObj['services'];

    for (var i = 0; i < serve.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = serve[i].name;
        myPara1.textContent = 'Price: ' + serve[i].price;
        myPara3.textContent = 'Details:';

        var detailRepair = serve[i].includes;
        for (var j = 0; j < detailRepair.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = detailRepair[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        main.appendChild(myArticle);
    }
}