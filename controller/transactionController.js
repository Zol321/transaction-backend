const transactionModel = require("../Schema/transactionModel");

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

const deleteTransaction = async (req, res) => {
  const transactionId = req.query.transactionId;
  try {
    const response = await transactionModel.findByIdAndDelete(transactionId);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTransaction = async(req, res) => {
  const transactionId = req.query.transactionId;
  const body = req.body
  try {
      const response = await transactionModel.findByIdAndUpdate(transactionId, body,{ new: true })
      res.status(201).send(response)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = { getTransaction, createTransaction, deleteTransaction, updateTransaction };
