class Session {
    static handleLogin = (username, email, role) => {
      console.log("received");
      console.log(username, email, role);
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("loggedInUser", username);
      sessionStorage.setItem("loggedInUserEmail", email);
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("expirationTime", new Date().getTime() + 1 * 60 * 1000);
      console.log(sessionStorage.getItem("loggedIn"));
      console.log(sessionStorage.getItem("loggedInUser"));
      console.log(sessionStorage.getItem("loggedInUserEmail"));
      console.log(sessionStorage.getItem("role", role));
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