import cors from "cors";

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

// CORS configuration for Expo + Localhost clients
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true); // Native app (Expo fetch has no origin header)
    }

    if (
      allowedOrigins.includes(origin) ||
      /^http:\/\/192\.168\.\d+\.\d+(:\d+)?$/.test(origin) // Expo apps from LAN
    ) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true, // Allow cookies, tokens, etc.
};

export default cors(corsOptions);
