// src/auth/lib/better-auth/config.ts
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { username } from "better-auth/plugins";
import { Pool } from "pg";

const auth = betterAuth({
  // Cambiado a const
  database: new Pool({
    connectionString:
      "postgresql://gmarcs:gmarcs_pass@localhost:5432/my_database",
    //"postgresql://gmarcs:kiwonfo3uwrcvq55@212.85.17.158:5432/poma",
  }),
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

export default auth; // Exportación por defecto
