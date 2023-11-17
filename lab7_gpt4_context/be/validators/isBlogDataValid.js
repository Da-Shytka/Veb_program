const { isArrayHasLength, isObjectHasProps  } = require("./utils/validators");

const isBlogDataValid = (data) => {

    // проверяем массив на наличие длины и соответствие типу "массив"
    const arrayLength = isArrayHasLength(data);

    if (!arrayLength)
        throw new Error("Переданные данные - не массив или длина массива = 0");

    // пробегаем по массиву, ищем null, undefined и отсутствующие аттрибуты
    data.forEach((obj) => 
    {
        isObjectHasProps(obj, ["isPrimary", "img", "content1", "content2", "button"]);
        const { img, button  } = obj;
        // проверяем внутренний объект на наличие полей и соответствие типу "объект"
        isObjectHasProps(img, ["src", "alt"]);
        isObjectHasProps(button, ["href", "title"]);
    });
}

module.exports = isBlogDataValid;