const mongoose = require("mongoose");

module.exports = async function connectionDataBase() {
  console.log(process.env.DATABASE_MONGO);
  const connection = await mongoose.connect(process.env.DATABASE_MONGO);
};
