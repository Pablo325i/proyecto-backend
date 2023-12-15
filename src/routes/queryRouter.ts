import express, { Application, Router } from "express";

// import { repoSearchController } from "../controllers/repoSearchController";
import { repoInfoController } from "../controllers/repoInfoController";
import { userInfoController } from "../controllers/userInfoController";
import { queryController } from "../controllers/queryController";
import { queryIdController } from "../controllers/queryIdController";
import userDeleteController from "../controllers/userDeleteController";
import reposDeleteController from "../controllers/reposDeleteController";

const router = express.Router();

// router.get("/repos", repoSearchController);
router.get("/github/repos", repoInfoController);
router.delete("/github/repos/:id", reposDeleteController);
router.get("/github/users", userInfoController);
router.delete("/github/users/:id", userDeleteController);
router.get("/queries", queryController);
router.get("/queries/:id", queryIdController);

// async (req, res) => {
//   const userName = req.query.name as string;

//   try {
//     const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

//     console.log("Hello, %s");

//     const response = await octokit.rest.search.users({
//       q: userName,
//     });

//     console.log("response", response);
//     res.json(response.data);
//   } catch (error: any) {
//     res.status(error.status || 500).json({ error: error.message });
//   }
// });

export default router;
