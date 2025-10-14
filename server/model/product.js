const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: "Seller",
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
