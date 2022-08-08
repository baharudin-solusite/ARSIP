const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");

router.get("/", (req, res) => {
  res.json({
    message: "sekolah app",
  });
});

// route untuk user
router.use("/user", userRouter);

module.exports = router;
