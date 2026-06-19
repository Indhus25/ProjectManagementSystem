const express = require("express");
const sequelize = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const User = require("./models/User");
const Project = require("./models/Project");
const Task = require("./models/Task");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Project Management System API Running...");
});

sequelize.sync()
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.log("Database Error:", err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});