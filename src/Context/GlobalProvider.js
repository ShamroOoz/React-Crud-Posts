import React, { useContext, createContext } from "react";

const dataContext = createContext();

export const ProvideData = ({ children }) => {
  //   const auth = useProvideAuth();
  const data = { name: "shamroz", age: 28 };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};
// Hook for child components to get the global object ...
// ... and re-render when it changes.
export const useDataContext = () => {
  return useContext(dataContext);
};
