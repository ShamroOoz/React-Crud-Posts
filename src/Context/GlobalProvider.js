import React, { useContext, createContext } from "react";
import useProvideData from "Hooks/useProvideData";
const dataContext = createContext();

export const ProvideData = ({ children }) => {
  const posts = useProvideData();
  const data = { ...posts };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};
// Hook for child components to get the global object ...
// ... and re-render when it changes.
export const useDataContext = () => {
  return useContext(dataContext);
};
