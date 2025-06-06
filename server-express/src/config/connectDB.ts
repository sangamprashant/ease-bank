import mongoose from "mongoose";
import _env from "../env";
import { initializeAdminUser } from "../utils/initializeAdmin.util";

const connectDB = async () => {
  try {
    await mongoose.connect(_env.MONGO_URI, {
      dbName: _env.MONGO_DB_NAME,
    });
    console.log("✅ Connected to MongoDB");
    await initializeAdminUser();
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
