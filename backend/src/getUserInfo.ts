import type { Request, Response } from "express";

export const getUserProfileAndRepos = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const headers = {
      Authorization: `Bearer ${process.env.GITHUB_API}`,
    };

    // 1. Fetch Profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
    });

    if (!userRes.ok) {
      res.status(userRes.status).json({ message: "User not found" });
      return;
    }

    const userData = await userRes.json();

    // 2. Extract specific fields
    const {
      name,
      avatar_url,
      bio,
      location,
      blog,
      public_repos,
      followers,
      following,
    } = userData;

    const profile = {
      name,
      avatar_url,
      bio,
      location,
      blog,
      public_repos,
      followers,
      following,
    };

    // 3. Fetch Repos
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`,
      { headers }
    );
    const reposData = await repoRes.json();

    // Simplify repo data for frontend as well
    const repos = reposData.map((repo: any) => ({
      name: repo.name,
      html_url: repo.html_url,
      topics: repo.topics,
      description: repo.description,
    }));

    res.json({ profile, repos });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
};

export const getIssuesByTopic = async (req: Request, res: Response) => {
  try {
    const { topic } = req.params;
    // Search for open 'good first issues' globally for a specific topic (cpp, js, etc)
    const url = `https://api.github.com/search/issues?q=topic:${topic}+state:open+label:"good first issue"`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.GITHUB_API}` },
    });
    const data = await response.json();

    res.json(data.items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch topics" });
  }
};
