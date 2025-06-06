import express, { Request, Response } from "express";
import corsMiddleware from "./utils/cors.util"
import authController from "./routes/auth.routes";

const app = express();

// Middlewares
app.use(express.json());
app.use(corsMiddleware)
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authController);
app.get("/", (_req: Request, res: Response) => {
  res.send("EaseBank Express Server is Running!");
});

// Start Server
export default app;
