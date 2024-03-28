const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const connect = require("./db");
const { transactionRoute } = require("./routes/transactionRoute");

const app = express();
const port = 8080;
app.use(cors());

app.use(express.json());
app.use(router);
app.use(transactionRoute);
connect();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
