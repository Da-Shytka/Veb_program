const { isObjectHasProps } = require("./utils/validators");

const isExceedingDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, ["girlWithGlasses", "contentAllData"]);
  
    const { girlWithGlasses, contentAllData} = data;
  
    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(girlWithGlasses, ["src", "alt"]);

    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(contentAllData, ["content1", "content2", "content3", "button"]);

    const { button } = contentAllData;

    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(button, ["href", "title"]);
    
  };

module.exports = isExceedingDataValid;