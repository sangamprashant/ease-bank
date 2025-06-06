import { loginController } from "../controller/auth.controller";

const express = require("express");

const router = express.Router();

router.post("/login", loginController);

export default router;
