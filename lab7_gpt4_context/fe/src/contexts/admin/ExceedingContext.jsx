import { createContext, useContext, useRef } from "react";
import exceedingData from "../../mockData/exceedingData";

const ExceedingContext = createContext();
const PostExceedingContext = createContext();

const ExceedingContextProvider = ({ children }) => {
  const data = useRef(exceedingData);
  return (
    <ExceedingContext.Provider value={data.current}>{children}</ExceedingContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useExceedingContext = () => useContext(ExceedingContext);
const usePostExceedingContext = () => useContext(PostExceedingContext);

export { useExceedingContext, usePostExceedingContext };
export default ExceedingContextProvider;