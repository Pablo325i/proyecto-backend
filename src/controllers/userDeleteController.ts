import { request } from "http";
import Search from "../models/searchModel";

const userDeleteController = async (req: any, res: any) => {
  const { id } = req.params;
  let data;
  try {
    data = await Search.findByIdAndDelete(id);

    if (!data) {
      throw new Error("User not found");
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    return;
  }

  res.status(200).json({ message: "User Deleted" });
};

export default userDeleteController;
