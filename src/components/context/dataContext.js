import React, { useReducer, createContext } from "react";

const initialState = {
  data: {},
  authenticated: false,
};

export const dataContext = createContext(initialState);

export const DataProvider = (props) => {
  const [data, dispatch] = useReducer((state, action) => {
    if (action.type === "add") return { ...state, data: action.payload };
    else return state;
  }, initialState.data);

  const [authenticated, dispatch2] = useReducer((state, action) => {
    if (action.type === "auth")
      return { ...state, authenticated: action.payload };
    else return state;
  }, initialState.authenticated);

  return (
    <dataContext.Provider value={{ data, dispatch, authenticated, dispatch2 }}>
      {props.children}
    </dataContext.Provider>
  );
};
