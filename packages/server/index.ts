import { createClient } from "@supabase/supabase-js";
import express, { Express } from "express";
import "dotenv/config";
import { Database } from "./database.types";
import { storeRouter } from "./router/store";

const app: Express = express();
const PORT = process.env.PORT || 3000;

const projectUrl = process.env.PROJECT_URL as string;
const projectApiKey = process.env.API_KEY as string;

export const supabase = createClient<Database>(projectUrl, projectApiKey);

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (form data)
// app.use(express.urlencoded({ extended: true }));

app.use(storeRouter);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
