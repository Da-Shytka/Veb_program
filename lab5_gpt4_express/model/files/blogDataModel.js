const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(
  __dirname,
  "..",
  "..",
  "db",
  "files",
  "blogData.json"
);
console.log(filePath);

const getBlogDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    console.log(file);

    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    throw new Error("Не получилось прочитать данные и файла");
  }
};

const postBlogDataModel = (data) => {
  try {
    writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось записать данные в файл");
  }
};

module.exports = { getBlogDataModel, postBlogDataModel };