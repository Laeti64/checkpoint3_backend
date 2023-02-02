import Express from "express";
import api from "./api";

const app = Express();

app.use(Express.json());

import cors from "cors";
import corsOptions from "./config/corsOptions";

app.use(cors(corsOptions));
app.use("/api/v1", api);

export default app;
