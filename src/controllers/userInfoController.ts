import { Request, Response } from "express";
import { Octokit } from "octokit";
import Search from "../models/searchModel";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || "",
});

export async function userInfoController(req: Request, res: Response) {
  const userName = req.query.name as string;
  let searchResponse;
  try {
    searchResponse = await Search.updateOne(
      { searchType: "users", "queryOptions.q": userName },
      { $set: { date: new Date() } }
    );
    console.log("buscado, ", searchResponse);
  } catch (error) {
    console.log("ERROR, ", error);
  }

  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    const response = await octokit.rest.search.users({
      q: userName,
    });
    const data = new Search({
      searchType: "users",
      queryOptions: {
        q: userName,
      },
    });
    // console.log("Repo name 🎈🎈 ", userName);

    if (searchResponse && searchResponse.modifiedCount > 0) {
      const dataToSave = await data.save();
    }

    // console.log("response", response);
    res.json(response.data);
  } catch (error: any) {
    res.status(error.status || 500).json({ error: error.message });
  }
}
