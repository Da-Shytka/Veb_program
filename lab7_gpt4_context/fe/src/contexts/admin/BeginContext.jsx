import { createContext, useContext, useRef } from "react";
import beginData from "../../mockData/beginData";

const BeginContext = createContext();
const PostBeginContext = createContext();

const BeginContextProvider = ({ children }) => {
  const data = useRef(beginData);
  return (
    <BeginContext.Provider value={data.current}>{children}</BeginContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useBeginContext = () => useContext(BeginContext);
const usePostBeginContext = () => useContext(PostBeginContext);

export { useBeginContext, usePostBeginContext };
export default BeginContextProvider;