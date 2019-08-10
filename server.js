const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connectDB
connectDB();
//Init Middleware to allow to get the data from request body
app.use(express.json({ extends: false }));

app.get("/", (req, res) => res.send("API RUNNING"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
