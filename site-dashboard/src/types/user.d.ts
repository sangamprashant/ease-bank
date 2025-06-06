type userType = "admin" | "user" | "manager" | "cashier";

type Branch = {
  _id: string;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  type: userType;
  branch: string | Branch;
}
