const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

//Exseeding
const { 
  getExceedingData, 
  postExceedingData 
} = require("../controllers/exceedingDataController");

router.route("/exceeding").get(getExceedingData).post(postExceedingData);

//Begin
const { 
  getBeginData, 
  postBeginData 
} = require("../controllers/beginDataController");

router.route("/begin").get(getBeginData).post(postBeginData);

//BlogText
const { 
  getBlogTextData, 
  postBlogTextData
} = require("../controllers/blogTextDataController");

router.route("/text").get(getBlogTextData).post(postBlogTextData);

//Blog
const { 
  getBlogData, 
  postBlogData 
} = require("../controllers/blogDataController");

router.route("/blog").get(getBlogData).post(postBlogData);

//Footer
const { 
  getFooterData, 
  postFooterData 
} = require("../controllers/footerDataController");

router.route("/footer").get(getFooterData).post(postFooterData);

//End
const { 
  getEndData, 
  postEndData 
} = require("../controllers/endDataController");

router.route("/end").get(getEndData).post(postEndData);

module.exports = router;