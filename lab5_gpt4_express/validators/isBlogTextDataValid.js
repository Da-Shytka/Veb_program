const { isObjectHasProps } = require("./utils/validators");

const isBlogTextDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, ["blogTextLeftData"]);
  
    const { blogTextLeftData } = data;
  
    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(blogTextLeftData, ["content"]);
    
  };

module.exports = isBlogTextDataValid;