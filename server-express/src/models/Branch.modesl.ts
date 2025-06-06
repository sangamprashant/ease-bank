import mongoose, { Document, Schema, Types } from "mongoose";

export interface IBranch extends Document {
  _id: Types.ObjectId;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

const BranchSchema = new Schema<IBranch>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBranch>("Branch", BranchSchema);
