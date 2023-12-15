import { request } from "http";
import Search from "../models/searchModel";

const reposDeleteController = async (req: any, res: any) => {
  const { id } = req.params;
  let data;
  try {
    data = await Search.findByIdAndDelete(id);

    if (!data) {
      throw new Error("Repository not found");
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    return;
  }

  res.json({ message: "Repository Deleted" });
};

export default reposDeleteController;
