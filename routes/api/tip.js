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
      firstTeam,
      secondTeam,
      date,
      time,
      betOn,
      odd,
      likes,
      unLikes,
      probability,
      votes,
      author,
      current,
      status
    } = req.body;
    const formatDate = new Date(date).toISOString();
    console.log(formatDate);

    //Build tip object
    const tipFields = {};
    tipFields.user = req.user.id;
    if (category) tipFields.category = category;
    if (firstTeam) tipFields.firstTeam = firstTeam;
    if (secondTeam) tipFields.secondTeam = secondTeam;
    if (date) tipFields.date = formatDate;
    if (time) tipFields.time = time;
    if (betOn) tipFields.betOn = betOn;
    if (odd) tipFields.odd = odd;
    if (likes) tipFields.likes = likes;
    if (unLikes) tipFields.unLikes = unLikes;
    if (probability) tipFields.probability = probability;
    if (votes) tipFields.votes = votes;
    if (author) tipFields.author = author;
    if (status) tipFields.status = status;
    if (current) tipFields.current = current;

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

// @route GET api/tip/user/:user_Name
// @desc Get tips by user Name
// @access Public

router.get("/user/:user_Name", async (req, res) => {
  try {
    const tips = await Tip.find({ author: req.params.user_Name });
    if (!tips) return res.status(400).json({ msg: "User dont have any tips." });
    res.json(tips);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route PUT api/tip/tip_id
// @desc Update tip, if user click on win,return,lose
// @access Private

router.put("/:tip_id", async (req, res) => {
  try {
    const tip = await Tip.findOneAndUpdate(
      { _id: req.params.tip_id },
      { current: false, status: req.body.status },
      { new: true }
    );
    await res.json(tip);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/tips/like/:id
// @desc     Like a tip
// @access   Private
router.put("/like/:id", auth, async (req, res) => {
  try {
    const tip = await Tip.findById(req.params.id);

    // Check if the tip has already been liked
    if (
      tip.votes.likes.filter(like => like.user.toString() === req.user.id)
        .length > 0 ||
      tip.votes.unLikes.filter(like => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "tip already liked" });
    }

    tip.votes.likes.unshift({ user: req.user.id });

    await tip.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/tips/unlike/:id
// @desc     Like a tip
// @access   Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const tip = await Tip.findById(req.params.id);

    // Check if the tip has already been liked
    if (
      tip.votes.likes.filter(like => like.user.toString() === req.user.id)
        .length > 0 ||
      tip.votes.unLikes.filter(like => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "tip has not yet been liked" });
    }

    // Get remove index
    // const removeIndex = post.likes
    //   .map(like => like.user.toString())
    //   .indexOf(req.user.id);

    // post.likes.splice(removeIndex, 1);

    tip.votes.unLikes.unshift({ user: req.user.id });

    await tip.save();

    res.json(tip.votes.unLikes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
