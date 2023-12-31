import footerData from "../../mockData/footerData.js";
import { footerTemplate } from "../templates/footerTemplate.js";

const initFooter = () => {
  const FooterNode = document.querySelector(".footer");

  FooterNode.insertAdjacentHTML("beforeend", footerTemplate(footerData));
};

export default initFooter;