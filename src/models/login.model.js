import mongoose from "mongoose";
const Schema = mongoose.Schema;

var LoginSchema = Schema({
  name: String,
  sessionId: String,
  date: String,
});

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;
