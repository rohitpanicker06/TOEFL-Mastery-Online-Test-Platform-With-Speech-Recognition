class Session {
  static handleLogin = (email) => {
    sessionStorage.setItem("loggedIn", true);
    sessionStorage.setItem("loggedInUser", email);
    sessionStorage.setItem("expirationTime", new Date().getTime() + 1 * 60 * 1000);
    console.log(sessionStorage.getItem("loggedIn"));
    console.log(sessionStorage.getItem("loggedInUser"));
  };

  static handleLogout = () => {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("expirationTime");
  };

  static isLoggedIn = () => {
    const expirationTime = sessionStorage.getItem("expirationTime");
    if (expirationTime && new Date().getTime() < expirationTime) {
      return sessionStorage.getItem("loggedIn");
    }
    Session.handleLogout(); 
    return null;
  };

  static getLoggedInUserEmail = () => {
    return sessionStorage.getItem("loggedInUser");
  };
}

export default Session;
