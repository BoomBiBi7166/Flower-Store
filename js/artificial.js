function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

let allProducts = [];

function renderProducts(products) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = ""; // clear first

    products.forEach(p => {
        grid.innerHTML += `
            <div class="col-12 col-sm-8 col-md-4 col-lg-3">
                <div class="card">
                    <img src="${p.image}" class="card-img-top" alt="${p.name}">
                    <div class="card-body text-center">
                        <h5 class="card-text mb-3">${p.name}</h5>
                        <h5 class="mt-0">฿${p.price}</h5>
                        <a href="/Flower-Store/flowerPage/product.html?id=${p.id}" class="btn btn-primary">BUY NOW</a>
                    </div>
                </div>
            </div>
        `;
    });
}


fetch("../products.json")
    .then(res => res.json())
    .then(data => {
        const category = document
            .getElementById("productGrid")
            .dataset.category;

        const subcategory = getQueryParam("type");

        let filtered = data.filter(p => p.category === category);

        if (subcategory) {
            filtered = filtered.filter(p => p.subcategory === subcategory);
        }

        renderProducts(filtered);
    });

const descriptions = {
    all: {
        title: "Artificial Flower",
        desc: "Celebrate every special moment with stunning fresh flowers. Available in various styles to perfectly match your heart's desire."
    }
};

const subcategory = getQueryParam("type");

const content = descriptions[subcategory] || descriptions["all"];

document.getElementById("pageTitle").textContent = content.title;
document.getElementById("pageDesc").textContent = content.desc;
document.title = content.title + " | Blooming Garden";
