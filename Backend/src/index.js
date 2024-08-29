import dotenv from "dotenv";
import { app } from "./app.js";
import connectDb from "./db/db.js";

dotenv.config();

connectDb().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at : ${process.env.PORT}`);
  });
});
