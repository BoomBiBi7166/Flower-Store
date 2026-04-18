fetch("/Flower-Store/partials/navbar.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("navbar").innerHTML = html;
    });
fetch("/Flower-Store/partials/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });