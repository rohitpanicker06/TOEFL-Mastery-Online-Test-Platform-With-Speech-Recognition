class Session {
    static handleLogin = (username, email, role) => {
      console.log("received");
      console.log(username, email, role);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("expirationTime", new Date().getTime() + 4 * 60 * 1000);
    };
  
    static handleLogout = () => {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("expirationTime");
    };
  
    static isLoggedIn = () => {
      const expirationTime = localStorage.getItem("expirationTime");
      if (expirationTime && new Date().getTime() < expirationTime) {
        return localStorage.getItem("loggedIn");
      }
      Session.handleLogout(); 
      return null;
    };
  
    static getLoggedInUserEmail = () => {
      return localStorage.getItem("loggedInUser");
    };
  }
  
  export default Session;