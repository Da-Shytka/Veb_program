const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(
  __dirname,
  "..",
  "..",
  "db",
  "files",
  "blogTextData.json"
);
const getBlogTextDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");

    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    throw new Error("Не получилось прочитать данные и файла");
  }
};

const postBlogTextDataModel = (data) => {
  try {
    writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось записать данные в файл");
  }
};

module.exports = { getBlogTextDataModel, postBlogTextDataModel };