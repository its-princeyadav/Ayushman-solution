import mongoose from "mongoose";

// One document per successful login (not per user) - see the login route
// handler, which is the only place these get created. Denormalizes
// name/email onto the record (in addition to userId) so login history can
// be read without a populate/join, even if a user later changes their name.
const loginActivitySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    loginAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true }
);

loginActivitySchema.index({ loginAt: -1 });
loginActivitySchema.index({ userId: 1 });

export default mongoose.models.LoginActivity || mongoose.model("LoginActivity", loginActivitySchema);
