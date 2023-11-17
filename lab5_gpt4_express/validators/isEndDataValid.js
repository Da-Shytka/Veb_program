const { isObjectHasProps } = require("./utils/validators");

const isEndDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["blogEndData"]);

  const { blogEndData } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(blogEndData, ["content"]);

};

module.exports = isEndDataValid;