const express = require("express");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const AppError = require("./utils/appError");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const reviewRoute = require("./routes/review");

const app = express();
app.use(express.json());

app.use("/api", userRoute);
app.use("/api/product", productRoute);
app.use("/api/review", reviewRoute);

app.all("*catchall", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
