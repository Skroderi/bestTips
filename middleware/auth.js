const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  const bearerHeader = req.cookies.token;

  if (!bearerHeader) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  if (bearerHeader) {
    const bearerToken = bearerHeader.split(" ")[1];

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
