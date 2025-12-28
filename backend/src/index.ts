import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { getUserProfileAndRepos } from "./getUserInfo";
import { analyzeGithubProfile } from "./gptControl";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/user/:username", getUserProfileAndRepos);
app.get("/api/groq/:username", analyzeGithubProfile);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
