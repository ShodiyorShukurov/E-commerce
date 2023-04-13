const elLoginForm = document.querySelector('.js-login-form');
const elLoginEmail = elLoginForm.querySelector('.js-login-email');
const elLoginPassword = elLoginForm.querySelector('.js-login-password');

const API_KEY = "https://e-commerc-ymsv.onrender.com";

async function login() {
    try {
        const res = await fetch(`${API_KEY}user/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: elLoginEmail.value,
                password: elLoginPassword.value
            }),
        })

        const data = await res.json();
        if(data.token){
            window.localStorage.setItem('loginToken', data.token);
            window.location.href = '/'
        }
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

elLoginForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    login()
});