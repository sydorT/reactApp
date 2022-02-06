import * as React from "react";

const HeaderContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "menuToggled": {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
        isRegisterOpen: false,
        isLoginOpen: false,
      };
    }
    case "openDialog": {
      if (action.payload === "login") {
        return {
          ...state,
          isLoginOpen: true,
          isMenuOpen: false,
          isRegisterOpen: false,
        };
      }
      if (action.payload === "register") {
        return {
          ...state,
          isRegisterOpen: true,
          isMenuOpen: false,
          isLoginOpen: false,
        };
      }
    }
    case "dialogClosed": {
      return {
        ...state,
        isLoginOpen: false,
        isRegisterOpen: false,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function HeaderProvider({ children }) {
  const defaultState = {
    isMenuOpen: false,
    isLoginOpen: false,
    isRegisterOpen: false,
  };
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const value = [state, dispatch];

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
}

function useHeader() {
  return React.useContext(HeaderContext);
}

export { HeaderProvider, useHeader };
