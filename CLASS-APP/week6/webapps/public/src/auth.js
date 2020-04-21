const doLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById('LoginInputUsername').value;
    const password = document.getElementById('LoginInputPassword').value;
  
    const res = await login({ username, password}).catch((err) => {
      alert('Failed to login. Please try again later.');
    });
  
    const { auth, access_token, refresh_token } = res;
  
    setStorage('isAuth', auth);
    setStorage('access_token', access_token);
    setStorage('refresh_token', refresh_token);
  
    window.location.href = 'home.html';
  };
  
  const doRegister = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const activeUser = 1;
    const res = await register({
      username,
      password,
      emailAddress,
      activeUser,
    });
  
    if (res) {
      window.location.href = '/';
    }
  };
  
  const doLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = '/';
  };
  
  (() => {
    if (storageHasData()) {
      const isAuth = getStorage('isAuth');
      if (!isAuth) {
        document.getElementById('logout').style.display = 'none';
      } else {
        document.getElementById('logout').style.display = 'block';
      }
    }
  })();
  