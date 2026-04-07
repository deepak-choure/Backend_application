import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

//Middleware (universal, not business logic based)
// to manage the cross origin resource access
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
//manage the request size
app.use(express.json({ limit: "16kb" }));

//manage url encoding (space and all characters)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//manage the serving of  all static file(media,css, pdf ,svg etc)
app.use(express.static("public"));

//parse the cookies in req,res handlers
app.use(cookieParser());

export { app };
