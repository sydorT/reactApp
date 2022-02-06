import React, { useEffect } from "react";
import { getClient } from "../components/login/requests";
import Cookies from "js-cookie";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const fetchUser = async () => {
    const token = Cookies.get("user");

    if (token) {
      const response = await getClient(token);
      console.log(response);
    }
  };

  console.log("provider");
  useEffect(() => {
    fetchUser();
  }, []);

  // code for pre-loading the user's information if we have their token in
  // localStorage goes here

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  // if (weAreStillWaitingToGetTheUserData) {
  // return <FullPageSpinner />;
  // }

  const login = () => {}; // make a login request
  const register = () => {}; // register the user
  const logout = () => {}; // clear the token in localStorage and the user data

  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return <AuthContext.Provider value={{ /*data,*/ login, logout, register }} />;
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider /*, useAuth*/ };

// the UserProvider in user-context.js is basically:
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
// and the useUser hook is basically this:
// const useUser = () => React.useContext(UserContext)
