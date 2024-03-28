const transactionModel = require("../Schema/transactionModel")

const getTransaction = async (req, res) => {
  try {
    const response = await transactionModel.find({});
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTransaction = async (req, res) => {
  const income = req.body;
  try {
    const response = await transactionModel.create(income);
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports ={getTransaction, createTransaction}
