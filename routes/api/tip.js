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
      probability,
      votes,
      author,
      current,
      status
    } = req.body;

    //Build tip object
    const tipFields = {
      user: req.user.id,
      category,
      firstTeam,
      secondTeam,
      date,
      time,
      betOn,
      odd,
      probability,
      votes,
      author,
      current,
      status
    };

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

// @route GET api/tip/user/:name
// @desc Get tips by user Name
// @access Public

router.get("/user/:name", async (req, res) => {
  try {
    const tips = await Tip.find({ author: req.params.name });

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
  console.log(req.params);
  console.log(req.body);
  console.log(req.body.type);

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

    if (req.body.type === "like") {
      tip.votes.likes.unshift({ user: req.user.id });
      await tip.save();
      res.json(tip.votes.likes);
    } else {
      tip.votes.unLikes.unshift({ user: req.user.id });
      await tip.save();
      res.json(tip.votes.unLikes);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/tips/unlike/:id
// @desc     Like a tip
// @access   Private
// router.put("/unlike/:id", auth, async (req, res) => {
//   try {
//     const tip = await Tip.findById(req.params.id);

//     // Check if the tip has already been liked
//     if (
//       tip.votes.likes.filter(like => like.user.toString() === req.user.id)
//         .length > 0 ||
//       tip.votes.unLikes.filter(like => like.user.toString() === req.user.id)
//         .length > 0
//     ) {
//       return res.status(400).json({ msg: "tip has not yet been liked" });
//     }

//     tip.votes.unLikes.unshift({ user: req.user.id });

//     await tip.save();

//     res.json(tip.votes.unLikes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

module.exports = router;
