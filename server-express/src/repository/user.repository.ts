import UserModel from "../models/User.model";
import { userType } from "../types/user";

export const findUserByEmail = (email: string) => UserModel.findOne({ email });
export const createUser = (userData: any) => UserModel.create(userData);
export const findUserById = (id: string) => UserModel.findById(id);
export const findUserByType = (type: userType) => UserModel.findOne({ type });
