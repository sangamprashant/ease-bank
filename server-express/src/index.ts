import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import connectDB from "./config/connectDB";
import _env from "./env";
const PORT = _env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB. Server not started.", err);
    process.exit(1);
  });
