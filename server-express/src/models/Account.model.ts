import mongoose, { Document, Schema } from "mongoose";

export interface IAccount extends Document {
  user: mongoose.Types.ObjectId;
  type: "Savings" | "Current" | "Fixed Deposit";
  number: string;
  balance: number;
  currency: string;
  createdAt: Date;
}

const AccountSchema = new Schema<IAccount>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: ["Savings", "Current", "Fixed Deposit"],
      required: true,
    },
    number: { type: String, required: true, unique: true },
    balance: { type: Number, required: true, default: 0 },
    currency: { type: String, default: "INR" },
  },
  { timestamps: true }
);

export default mongoose.model<IAccount>("Account", AccountSchema);
