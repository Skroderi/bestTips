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

module.exports = router;
