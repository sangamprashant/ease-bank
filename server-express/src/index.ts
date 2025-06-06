import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/connectDB";

const PORT = process.env.PORT || 5000;
dotenv.config();

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
