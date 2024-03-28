const { Router } = require("express");
const { getTransaction, createTransaction } = require("../controller/transactionController");

const transactionRoute = Router();

transactionRoute.get("/get-transaction", getTransaction);
transactionRoute.post("/create-transaction", createTransaction);

module.exports = { transactionRoute } 
    