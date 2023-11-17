const { isObjectHasProps } = require("./utils/validators");

const isBeginDataValid = (data) => {
    // проверяем объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(data, ["beginLeftData", "beginRightData"]);
  
    const { beginLeftData, beginRightData} = data;
  
    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(beginLeftData, ["content1", "content2"]);

    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(beginRightData, ["button"]);

    const { button } = beginRightData;

    // проверяем внутренний объект на наличие полей и соответствие типу "объект"
    isObjectHasProps(button, ["href", "title"]);
    
  };

module.exports = isBeginDataValid;