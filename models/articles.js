const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  id: { type: String, required: true },
  headline: { type: String, required: true },
  date: { type: String, require: true },
url: { type: String, require: true }
});

const Articles = mongoose.model("Articles", articlesSchema);

module.exports = articles;