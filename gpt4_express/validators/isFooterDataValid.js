const { isArrayHasLength, isObjectHasProps  } = require("./utils/validators");

const isBlogDataValid = (data) => {

    // проверяем массив на наличие длины и соответствие типу "массив"
    const arrayLength = isArrayHasLength(data);

    if (!arrayLength)
        throw new Error("Переданные данные - не массив или длина массива = 0");

    // пробегаем по массиву, ищем null, undefined и отсутствующие аттрибуты
    data.forEach((obj) => 
    {
        isObjectHasProps(obj, ["header", "button1", "button2", "button3", "button4"]);
        const { button1, button2, button3, button4  } = obj;
        // проверяем внутренний объект на наличие полей и соответствие типу "объект"
        isObjectHasProps(button1, ["href1", "title1"]);
        isObjectHasProps(button2, ["href2", "title2"]);
        isObjectHasProps(button3, ["href3", "title3"]);
        isObjectHasProps(button4, ["href4", "title4"]);
    });
}

module.exports = isBlogDataValid;