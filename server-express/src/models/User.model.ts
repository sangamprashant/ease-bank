import mongoose, { Document, ObjectId, Schema } from "mongoose";
import { User } from "../types/user";

export interface IUser extends Document, User {
  _id: ObjectId;
  branch: ObjectId;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    type: {
      type: String,
      enum: ["admin", "user", "manager", "cashier"],
      default: "user",
      required: true,
    },
    branch: {
      type: Schema.Types.ObjectId,
      ref: "Branch",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
