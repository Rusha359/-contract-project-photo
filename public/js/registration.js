// регистрация пользователя
const registration = document.querySelector('.js-registration');
const regErr = document.querySelector('.js-error');
if (registration) {
  registration.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = event.target;

    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      }),
    });
    const data = await response.json();
    if (data.status === 'error') {
      regErr.innerHTML = data.message;
    } else {
      window.location.assign('/');
    }
  });
}

// вход пользователя
const login = document.querySelector('.js-login');
console.log(login);
const loginError = document.querySelector('js-login-error');
if (login) {
  login.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const responce = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await responce.json();
    if (data.status === 'error') {
      loginError.innerHTML = data.message;
    } else {
      window.location.assign('/');
    }
  });
}
