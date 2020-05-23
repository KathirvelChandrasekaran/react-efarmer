const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./userRouter");
app.use(express.json());
app.use(morgan("dev"));

app.use(cors());
app.use("/api", userRouter);

app.listen(5000, () => {
  console.log("Server is running");
});

mongoose.connect(
  "mongodb+srv://kathir:kathir1234@cluster0-8bpfs.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MongoDB Connected");
  }
);
