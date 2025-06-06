import { Response } from "express";

/**
 * Sends a standardized error response.
 */
export const handleError = (res: Response,  error: unknown,status = 400,) => {
  const message =
    error instanceof Error ? error.message : "An unexpected error occurred.";
  return res.status(status).json({ success: false, message });
};

/**
 * Sends a standardized success response.
 */
export const successResponse = <T>(
  res: Response,
  data: T,
  message = "Success",
  status = 200
) => {
  return res.status(status).json({ success: true, data, message });
};
