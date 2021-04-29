import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  useEffect(() => {
    // login event listener
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });

    // logout event listener
    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });

       // authReady event listener
       netlifyIdentity.on("init", (user) => {
        setAuthReady(true)
        setUser(user);
        console.log("init event");
      });

    // initialize netlify identity
    netlifyIdentity.init();

    // on DOM unmount remove the event listeners

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };
  const context = { user, login, logout,authReady };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
