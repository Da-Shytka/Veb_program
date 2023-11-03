import beginData from "../../mockData/beginData.js";
import { beginTemplate } from "../templates/beginTemplate.js";

const initBegin = () => {
  const BeginNode = document.querySelector(".begin");

  BeginNode.insertAdjacentHTML("beforeend", beginTemplate(beginData));
};

export default initBegin;