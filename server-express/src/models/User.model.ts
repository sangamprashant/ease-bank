import mongoose, { Document, Schema } from "mongoose";

type userType = "admin" | "user" | "manager" | "cashier";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  type: userType;
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
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
