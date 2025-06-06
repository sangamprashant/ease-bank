export type userType = "admin" | "user" | "manager" | "cashier";

export type User = {
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  type: userType;
};
