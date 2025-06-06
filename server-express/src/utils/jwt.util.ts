import jwt from "jsonwebtoken";
import _env from "../env";

const JWT_SECRET = _env.JWT_SECRET;

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
