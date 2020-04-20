(() => {
    const isAuth = getStorage('isAuth');
    if (!isAuth) {
        logout();
        alert('Log in to view your traveler information');
        window.location.href = '/login.html';
    }
})();
