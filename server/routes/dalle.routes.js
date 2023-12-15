import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

router.route("/").get((req, rest) => {
  rest.status(200).json({ message: "Hello from DALL.E from routes" });
});

export default router;
