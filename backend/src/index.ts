import express from "express";
import dotenv from "dotenv";
import { getUserProfileAndRepos, getIssuesByTopic } from "./getUserInfo.ts";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/user/:username", getUserProfileAndRepos);
app.get("/api/topics/:topic", getIssuesByTopic);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
