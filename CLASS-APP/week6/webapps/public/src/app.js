const doLogin = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    login({
        username: username,
        password: password
    }).then(function(res) {
        window.location.href = 'home.html';
    });
};

const doRegister = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const activeUser = 1;

    register({
        username: username,
        password: password,
        emailAddress: emailAddress,
        activeUser: activeUser
    }).then(function(res) {
        window.location.href = 'home.html';
    });
};

const doLogout = function(e) {
    e.preventDefault();
};