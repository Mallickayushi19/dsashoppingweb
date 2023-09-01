// login.js

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials (for demonstration, use a hard-coded username and password)
    if (username === 'user' && password === 'password') {
        // Authentication successful, store user data in local storage
        const user = { username };
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to a protected page or update UI
        alert('Login successful');
        // For example, you can redirect to the main shopping page:
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials');
    }
});
