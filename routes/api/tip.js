const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const config = require("config");
const Tip = require("../../models/Tip");

// @route POST api/tip
// @desc Add tip
// @access Private
router.post(
  "/",
  [
    auth,
    [
      check("firstTeam", "team is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      category,
      id,
      firstTeam,
      secondTeam,
      date,
      time,
      betOn,
      odd,
      likes,
      unLikes,
      probability,
      voted,
      author
    } = req.body;

    //Build tip object
    const tipFields = {};
    tipFields.user = req.user.id;
    if (category) tipFields.category = category;
    if (firstTeam) tipFields.firstTeam = firstTeam;
    if (secondTeam) tipFields.secondTeam = secondTeam;
    if (date) tipFields.date = date;
    if (time) tipFields.time = time;
    if (betOn) tipFields.betOn = betOn;
    if (odd) tipFields.odd = odd;
    if (likes) tipFields.likes = likes;
    if (unLikes) tipFields.unLikes = unLikes;
    if (probability) tipFields.probability = probability;
    if (voted) tipFields.voted = voted;
    if (author) tipFields.author = author;

    // Create
    try {
      tip = new Tip(tipFields);
      await tip.save();
      res.json(tip);
    } catch (error) {
      res.status(500).send("Server Error");
      console.error(error);
    }
  }
);

// @route GET api/tip
// @desc Get all tip
// @access Public

router.get("/", async (req, res) => {
  try {
    const tips = await Tip.find();
    res.json(tips);
  } catch (err) {
    console.err(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/tip/user/:user_id
// @desc Get tips by user ID
// @access Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const tip = await Tip.find({ user: req.params.user_id });
    if (!tip) return res.status(400).json({ msg: "User dont have any tips." });
    res.json(tip);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
