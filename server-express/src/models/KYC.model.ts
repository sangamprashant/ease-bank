import mongoose, { Document, Schema } from "mongoose";

export interface IKYC extends Document {
  user: mongoose.Types.ObjectId;
  documentType: "Aadhaar" | "PAN" | "Passport";
  documentUrl: string;
  status: "Pending" | "Verified" | "Rejected";
  uploadedAt: Date;
}

const KYCSchema = new Schema<IKYC>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    documentType: {
      type: String,
      enum: ["Aadhaar", "PAN", "Passport"],
      required: true,
    },
    documentUrl: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Verified", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: { createdAt: "uploadedAt" } }
);

export default mongoose.model<IKYC>("KYC", KYCSchema);
