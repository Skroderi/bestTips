const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
var cookieParser = require("cookie-parser");

// load env vars

dotenv.config({ path: "./config/config.env" });
//connectDB
connectDB();
//Init Middleware to allow to get the data from request body
app.use(express.json({ extends: false }));
app.use(cookieParser());

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/tip", require("./routes/api/tip"));

//serve static assets in production
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__direname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
