import Express from "express";

const app = Express();

app.use(Express.json());

app.get("/", (req, res) => {
  return res.status(200).json("Hello world");
});

export default app;
