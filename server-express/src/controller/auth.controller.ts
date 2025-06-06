import { Request, Response } from "express";
import { loginService } from "../service/auth.service";
import { handleError, successResponse } from "../utils/response.util";

export const loginController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const data = await loginService(email, password);

    successResponse(res, data);
  } catch (error) {
    handleError(res, error, 500);
  }
};
