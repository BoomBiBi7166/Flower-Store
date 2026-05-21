// READ URL
const params =
    new URLSearchParams(window.location.search);

const productID =
    params.get("id");


// LOAD PRODUCTS FROM JSON
fetch("../products.json")

    .then(res => res.json())

    .then(data => {

        const product =
            data.find(p => p.id === productID);

        if (product) {

            document.getElementById("productName").innerText =
                product.name;

            document.getElementById("productPrice").innerText =
                "฿" + product.price;

            document.getElementById("productCollection").innerText =
                product.collection;

            document.getElementById("productDescription").innerText =
                product.description;

            document.getElementById("productImage").src =
                product.image;

            document.getElementById("breadcrumbName").innerText =
                product.name;
            const categoryData = {

                fresh: {
                    name: "Fresh Flower",
                    link: "/flowerPage/fresh.html"
                },

                artificial: {
                    name: "Artificial Flower",
                    link: "/flowerPage/artificial.html"
                }    
        }

    });


// QUANTITY BUTTONS
function increaseQuantity() {

    const input =
        document.getElementById("quantity");

    input.value =
        parseInt(input.value) + 1;
}


function decreaseQuantity() {

    const input =
        document.getElementById("quantity");

    if (parseInt(input.value) > 1) {

        input.value =
            parseInt(input.value) - 1;
    }
}
