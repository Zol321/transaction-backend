const { Router } = require("express");
const { getTransaction, createTransaction, deleteTransaction, updateTransaction } = require("../controller/transactionController");

const transactionRoute = Router();

transactionRoute.get("/get-transaction", getTransaction);
transactionRoute.post("/create-transaction", createTransaction);
transactionRoute.delete("/delete-transaction", deleteTransaction)
transactionRoute.post('/update-transaction', updateTransaction)

module.exports = { transactionRoute } 
    