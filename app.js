import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var data = [];

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

import sesiuniRoutes from "./routes/sesiuni.routes.js";
app.use("/sesiuni", sesiuniRoutes);

import robotiRoutes from "./routes/roboti.routes.js";
app.use("/roboti", robotiRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// app.get("/ruta", (req, res) => {
//   res.send("Hello from API hehehehhehe");
// });
