import express from "express";
import Portfolio from "../models/Portfolio.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/* GET portfolio */
router.get("/", auth, async (req, res) => {
  const data = await Portfolio.findOne({ userId: req.user });
  res.json(data || { holdings: {} });
});

/* SAVE portfolio */
router.post("/", auth, async (req, res) => {
  const saved = await Portfolio.findOneAndUpdate(
    { userId: req.user },
    { holdings: req.body },
    { upsert: true, new: true }
  );
  res.json(saved);
});

export default router;
