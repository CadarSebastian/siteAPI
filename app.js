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

import copiiRoutes from "./routes/copii.routes.js";
app.use("/copii", copiiRoutes);

import robotiRoutes from "./routes/roboti.routes.js";
app.use("/roboti", robotiRoutes);

import dburi1Routes from "./routes/dburi1.routes.js";
app.use("/dburi1", dburi1Routes);

import dburi2Routes from "./routes/dburi2.routes.js";
app.use("/dburi2", dburi2Routes);

import dburi3Routes from "./routes/dburi3.routes.js";
app.use("/dburi3", dburi3Routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// app.get("/ruta", (req, res) => {
//   res.send("Hello from API hehehehhehe");
// });
