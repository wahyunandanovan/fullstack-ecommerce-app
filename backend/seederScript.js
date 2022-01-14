require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/product");

connectDB();

const ImportData = async () => {
  console.log(Product);
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data import Sucess");
    process.exit();
  } catch (error) {
    console.log(error);
    console.error("Error with data import");
    process.exit(1);
  }
};
ImportData();
