import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  holdings: Object
});

export default mongoose.model("Portfolio", PortfolioSchema);
