import React, { useReducer, createContext } from "react";

const initialState = {
  data: {},
};

export const dataContext = createContext(initialState);

export const DataProvider = (props) => {
  const [data, dispatch] = useReducer((state, action) => {
    if (action.type === "add") return { ...state, data: action.payload };
    else return state;
  }, initialState.data);

  return (
    <dataContext.Provider value={{ data, dispatch }}>
      {props.children}
    </dataContext.Provider>
  );
};
