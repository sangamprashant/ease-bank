import UserModel from "../models/User.model";
import { findUserByType } from "../repository/user.repository";
import { hashedPassword } from "./bcrypt.util";

export const initializeAdminUser = async () => {
  const adminEmail = "admin@easebank.in";

  const existingAdmin = await findUserByType("admin");
  if (existingAdmin) {
    console.log("✅ Admin user already exists.");
    return;
  }

  const hPassword = await hashedPassword("admin1234");

  await UserModel.create({
    name: "EaseBank Admin",
    email: adminEmail,
    phone: "9999999999",
    password: hPassword,
    address: "EaseBank HQ",
    type: "admin",
  });

  console.log("✅ Admin user initialized");
};
