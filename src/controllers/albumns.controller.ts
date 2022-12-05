import { Request, Response } from "express";
import { getConnection, querys } from "../database";

export const getAlbumns = async (_req: Request, res: Response) => {
  try {
    const pool = await getConnection();
    const result = await pool?.request().query(querys.getAllAlbumns as string);
    res.json(result?.recordset);
    return;
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
