const mongoose = require("mongoose");

module.exports = async function connectionDataBase() {
  const connection = await mongoose.connect(process.env.DATABASE_MONGO);
};
