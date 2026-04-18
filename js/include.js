fetch("/partials/navbar.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("navbar").innerHTML = html;
    });
fetch("/partials/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    });