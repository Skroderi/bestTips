const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from header
  const bearerHeader = req.headers["authorization"];

  // console.log(token);
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];

    //Check if not token
    if (!bearerHeader) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Verify token
    try {
      const decoded = jwt.verify(bearerToken, config.get("jwtToken"));

      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  }
};
