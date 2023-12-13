import { Request, Response } from "express";
import { Octokit } from "octokit";
import Search from "../models/searchModel";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN || "",
});

export async function queryIdController(req: Request, res: Response) {
  try {
    const data = await Search.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
