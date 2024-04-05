import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

Hello(app);
app.use(express.json());
ModuleRoutes(app);
AssignmentRoutes(app);
CourseRoutes(app);
Lab5(app);

app.listen(4000);

