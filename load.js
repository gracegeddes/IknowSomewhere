function LoadDoc () {
    var xhttp = new XMLHttpRequest ();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            DisplayBars(this);
        }
    };

    xhttp.open("GET", "MelbourneNightlife.xml", true);
    xhttp.send();
}

function DisplayBars(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Bar</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("place");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("Bars").innerHTML = table;
}