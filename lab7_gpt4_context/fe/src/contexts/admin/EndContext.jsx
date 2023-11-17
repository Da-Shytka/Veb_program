import { createContext, useContext, useRef } from "react";
import endData from "../../mockData/endData";

const EndContext = createContext();
const PostEndContext = createContext();

const EndContextProvider = ({ children }) => {
  const data = useRef(endData);
  return (
    <EndContext.Provider value={data.current}>{children}</EndContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useEndContext = () => useContext(EndContext);
const usePostEndContext = () => useContext(PostEndContext);

export { useEndContext, usePostEndContext };
export default EndContextProvider;