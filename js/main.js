const elInputFrom = document.querySelector('.js-input-form');
const elInputName = elInputFrom.querySelector('.js-name-input');
const elInputDesc = elInputFrom.querySelector('.js-desc-input');
const elInputImg = elInputFrom.querySelector('.js-img-input');
const elInputNumber = elInputFrom.querySelector('.js-number-input');

const API_KEY = 'https://e-commerc-ymsv.onrender.com';

const token = window.localStorage.getItem("loginToken")

async function setProduct(id) {
    if (id >= 0) {
        try {
            // Create FormData object
            const formData = new FormData();
            formData.append('product_name', elInputName.value);
            formData.append('product_desc', elInputDesc.value);
            formData.append('product_price', elInputNumber.value);
            formData.append('product_img', elInputImg.files[0]); // Append the image file

            const res = await fetch(API_KEY + 'product/' + id, {
                method: 'PUT',
                headers: {
                    Authorization: token,
                },
                body: formData // Pass the FormData object as the request body
            });
            const data = await res.json();
        } catch (error) {
            console.log(error.message);
        }
    } else {
        try {
            // Create FormData object
            const formData = new FormData();
            formData.append('product_name', elInputName.value);
            formData.append('product_desc', elInputDesc.value);
            formData.append('product_price', elInputNumber.value);
            formData.append('product_img', elInputImg.files[0]); // Append the image file

            const res = await fetch(API_KEY + 'product', {
                method: 'POST',
                headers: {
                    Authorization: token,
                },
                body: formData // Pass the FormData object as the request body
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
}

elInputFrom.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    const productId = elInputFrom.getAttribute('data-product-id'); // Get the product ID from the data-product-id attribute of the form

    if (productId) {
        // If product ID exists, call the setProduct function with the product ID
        await setProduct(productId);
    } else {
        // If product ID does not exist, call the setProduct function without passing an ID
        await setProduct();
    }
    console.log(productId);
})
// setProduct();

