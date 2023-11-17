import blogTextData from "../../mockData/blogTextData.js";
import { blogTextTemplate } from "../templates/blogTextTemplate.js";

const initBlogText = () => {
  const BlogTextNode = document.querySelector(".blog_text");

  BlogTextNode.insertAdjacentHTML("beforeend", blogTextTemplate(blogTextData));
};

export default initBlogText;