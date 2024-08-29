import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/ping", (req, res) => {
  res.send("Server is running");
});

//routes import

import cardRouter from "./routes/card.routes.js";

//routes declaration
app.use("/api/v1/help-center", cardRouter);

export { app };
