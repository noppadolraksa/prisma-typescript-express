import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { MainRouter } from "./routes";

//import route

const app = express();
dotenv.config();

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//api
app.use("/api", MainRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(` Server is running at https://localhost:${port}`);
});
