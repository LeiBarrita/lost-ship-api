import express, { Express } from "express";
import helpRoutes from "./routes/help.routes";
const cors = require("cors");

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(helpRoutes);

export default app;
