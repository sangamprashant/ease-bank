import express, { Request, Response } from "express";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.send("EaseBank Express Server is Running!");
});

// Start Server
export default app;
