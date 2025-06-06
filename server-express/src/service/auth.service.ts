import { findUserByEmail } from "../repository/user.repository";
import { comparePassword } from "../utils/bcrypt.util";
import { generateToken } from "../utils/jwt.util";

export const loginService = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }
  if (!(await comparePassword(password, user.password))) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user._id.toString());

  const userData = {
    _id: user._id.toString(),
    email: user.email,
    type: user.type,
    name: user.name,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  return { user: userData, token };
};
