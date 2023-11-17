import { createContext, useContext, useRef } from "react";
import blogTextData from "../../mockData/blogTextData";

const BlogTextContext = createContext();
const PostBlogTextContext = createContext();

const BlogTextContextProvider = ({ children }) => {
  const data = useRef(blogTextData);
  return (
    <BlogTextContext.Provider value={data.current}>{children}</BlogTextContext.Provider>
  );
};

// кастомные хуки для простоты получения
const useBlogTextContext = () => useContext(BlogTextContext);
const usePostBlogTextContext = () => useContext(PostBlogTextContext);

export { useBlogTextContext, usePostBlogTextContext };
export default BlogTextContextProvider;