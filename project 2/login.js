document.querySelector('.login-form').addEventListener('submit', function(e) {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        e.preventDefault();
    }
});
