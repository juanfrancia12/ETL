import { Request, Response } from "express";
import { getConnection, querys } from "../database";

export const getFactOrden = async (_req: Request, res: Response) => {
  try {
    const pool = await getConnection();
    const result = await pool?.request().query(querys.getAllFactOrdernes);
    res.json(result?.recordset);
    return;
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
