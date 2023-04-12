const elInputFrom = document.querySelector('.js-input-form');
const elInputName = document.querySelector('.js-name-input');
const elInputDesc = document.querySelector('.js-desc-input');
const elInputImg = document.querySelector('.js-img-input');
const elInputNumber = document.querySelector('.js-number-input');

const API_KEY = 'http://192.168.87.38:5000/';

const token = window.localStorage.getItem("loginToken")

async function createTodo() {
    try {
        const res = await fetch(`${API_KEY}product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                product_name: elInputName.value,
                product_desc: elInputDesc.value,
                // product_img: elInputImg.value,
                product_price: elInputNumber.value,
            })
        })
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
}

elInputFrom.addEventListener("submit", (evt) => {
    evt.preventDefault();

    createTodo();
})