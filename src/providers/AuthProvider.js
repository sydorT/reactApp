import React, { useState, useEffect } from "react";
import { getClient, login as loginRequest } from "../components/login/requests";
import Cookies from "js-cookie";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const token = Cookies.get("token");

    if (token) {
      const response = await getClient(token);
      if (response.status === 200) {
        setUser({ user: "TODO" });
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // if (isLoading) {
  //   return null;
  // }

  const login = async (data) => {
    const response = await loginRequest(data);
    const json = await response.json();
    if (json.token) {
      Cookies.set("token", json.token);
      fetchUser();

      return { success: true };
    } else if (response.status === 401) {
      return { success: false, error: "Invalid password or login" };
    } else {
      return { success: false, fieldErrors: json.fieldErrors || [] };
    }
  };

  const register = () => {}; // register the user

  const logout = () => {
    Cookies.remove("token");
    setUser(undefined);
  };

  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        login,
        logout,
        register,
        isAuthenticated: !!user,
      }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };

// the UserProvider in user-context.js is basically:
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
// and the useUser hook is basically this:
// const useUser = () => React.useContext(UserContext)
