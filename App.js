import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";

mongoose.connect(process.env.CONNECTION_STRING);

const app = express();
// app.use(cors());

app.use(express.json());
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}

app.use(session(sessionOptions));
// app.use(express.json());
app.use(
    cors({
      credentials: true,
      //origin: "http://localhost:3000",
      origin: process.env.FRONTEND_URL
    }))
UserRoutes(app);
Hello(app);
ModuleRoutes(app);
AssignmentRoutes(app);
CourseRoutes(app);
Lab5(app);
  
  
app.listen(process.env.PORT || 4000);
