const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

//@route Get api/auth
// @desc Test route
// @acces Public

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // return user without password
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).sed("Server Error");
  }
});

// @route POST api/auth
// @desc Authenticate user & get token
// @access Public

router.post(
  "/",
  [
    check("email", "Please include a vaild email").isEmail(),
    check("password", "Password id required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };
      const token = jwt.sign(payload, config.get("jwtToken"));
      res.cookie("token", `Bearer ${token}`, {
        expiresIn: 360000,
        httpOnly: true
      });
      res.status(200).json({ token });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
