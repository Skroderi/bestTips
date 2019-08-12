const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");

// @route POST api/users
// @desc Register User
// @access Public

router.post(
  "/",
  [
    // Validate
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a vaild email").isEmail(),
    check(
      "password",
      "Please enter a password with 5 or more characters"
    ).isLength({ min: 5 })
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      // USER REGISTRATION

      /////////////// 1. See if user name or email exists //////////////
      let userEmail = await User.findOne({ email });
      let userName = await User.findOne({ name });
      if (userEmail) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Email already used." }] });
      } else if (userName) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      //////////// 2. Get users gravatar ///////////
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm" //default icon user
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

      ///////// 3. Encrypt password ////////////////

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // res.send("user registered");

      ////////// 4. Return jsonwebtoken //////////////
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtToken"),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      // MSG if user registered or error if not
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
