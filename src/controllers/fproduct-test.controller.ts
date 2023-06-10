import { Request, Response } from "express";
import JSONproduct from "../mock/products.json";

export const getProductJSON = async (_req: Request, res: Response) => {
  try {
    res.json(JSONproduct);
    return;
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
