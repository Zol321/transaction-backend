const { mongoose, Schema } = require("mongoose");

const transactionSchema = new Schema({
  category: {
    type: String,
    enum: [ "Food & Drinks","Shopping", "Bills", "Clothing", "Transportatin", "Vechile", "Life & Entertaiment", "Communication, Pc", "Financial expenses", "Investments", "Income", "Others"],
  },
  incomeTitle: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now() },
  note: String,
  transactionType: {
    type: String,
    enum: ["income", "expense"],
  },
});

const transactionModel = mongoose.model("incomes", transactionSchema);

module.exports = transactionModel;
