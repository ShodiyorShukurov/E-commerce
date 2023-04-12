const elRegisterForm = document.querySelector('.js-register-form');
const elRegisterName = elRegisterForm.querySelector('.js-register-name');
const elRegisterEmail = elRegisterForm.querySelector('.js-register-email');
const elRegisterPhone = elRegisterForm.querySelector('.js-register-tel');
const elRegisterPassword = elRegisterForm.querySelector('.js-register-password');

const API_KEY = 'http://192.168.87.38:5000/';

async function register() {
    try {
        const res = await fetch(`${API_KEY}user/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_name: elRegisterName.value,
                phone: elRegisterPhone.value,
                email: elRegisterEmail.value,
                password: elRegisterPassword.value
            }),
        })
        const data = await res.json();
        if(data.token){
            window.localStorage.setItem('registerToken', data.token);
            window.location.href = '/login.html'
        }
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

elRegisterForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    register()
});

