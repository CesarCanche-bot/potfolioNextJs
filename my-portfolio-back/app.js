const express = require("express");
const mongoose = require("mongoose");
const ProjectRoutes = require("./src/routes/projects");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/projects", ProjectRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(process.env.PORT);
  } catch (err) {
    console.log("Failed to connect to Mongo", err);
  }
};

connectDB();
