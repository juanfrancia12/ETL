import { config } from "dotenv";
config();

export default {
  port: process.env.NODE_PORT || 4000,
  dbUser: process.env.NODE_DB_USER || "",
  dbPassword: process.env.NODE_DB_PASSWORD || "",
  dbServer: process.env.NODE_DB_SERVER || "",
  dbDatabase: process.env.NODE_DB_DATABASE || "",
};

export const SECRET_KEY = process.env.NODE_SECRET_KEY;
export const expiresIn = process.env.NODE_EXPIRES_IN;

export const ID_ROLE_USER = process.env.NODE_ID_ROLE_USER;
export const ID_ROLE_SELLER = process.env.NODE_ID_ROLE_SELLER;
export const ID_ROLE_ADMIN = process.env.NODE_ID_ROLE_ADMIN;
