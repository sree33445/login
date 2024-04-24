const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userModel = require("./model/userModel");
const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  const { name, age } = req.body;
  const user = new userModel({
    name: name,
    age: age,
  });
  user.save();
  res.send("Server");
});

app.post("/addUser", (req, res) => {
  const { name, age } = req.body;

  const user = new userModel({
    name: name,
    age: age,
  });

  user
    .save()
    .then(() => {
      res.send("User added successfully");
    })
    .catch((err) => {
      res.status(400).send("Error adding user:" + err);
    })
});


mongoose
  .connect(
    "mongodb+srv://sreerajs:sreerajs@cluster0.feuq4z3.mongodb.net/practice24?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to db");

    app.listen(PORT, () => {
      console.log("Server running on port:" + PORT);
    });
  })
  .catch((err) => {
    console.log("db connection error", +err);
  });
