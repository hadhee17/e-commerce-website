const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  Product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  price: Number,
  category: String,
  image: String,
  paid: Boolean,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const order = mongoose.model("Order", orderSchema);
module.exports = order;
