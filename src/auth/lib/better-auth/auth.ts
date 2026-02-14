//import { Pool } from "pg";
//import { DATABASE_URL } from "@/shared/environment";

import { Database } from "bun:sqlite";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { username } from "better-auth/plugins";

/**
export const authConfig = betterAuth({
  database: new Pool({
    connectionString: `postgresql://gmarcs:kiwonfo3uwrcvq55@212.85.17.158:5436/poma`,
  }),
  plugins: [username(), nextCookies()],
});
*/

export const authConfig = betterAuth({
  database: new Database("database.sqlite"),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      username: {
        type: "string",
        required: true,
        input: true,
      },
    },
  },
  plugins: [username(), nextCookies()],
});
