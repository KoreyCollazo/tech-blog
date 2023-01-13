const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-register').value.trim();
  const email = document.querySelector('#email-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();
  const confirm = document.querySelector('#confirm-register').value.trim();

  if (password !== confirm) {
    alert ("passwords do not match");
    return;
  }
// still need to add post method for register to routes
//still need to add requirements for password
//check for places that have login
//havent made any commits
  if (name && email && password) {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to register');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
