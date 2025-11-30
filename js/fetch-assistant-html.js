fetch("./assistant/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

fetch("./assistant/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
