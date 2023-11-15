function createElement(data){
    var paragraph = document.createElement("p")
    paragraph.innerHTML = data
    document.body.appendChild(paragraph)
}

function queryWikipedia(callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
    if (xhttp.readyState == XMLHttpRequest.DONE) {
        response = JSON.parse(xhttp.responseText)
       callback(response.query.pages['Stack'].extract)
    }
}
xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20O", true);
xhttp.send();
}

queryWikipedia(createElement)