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
app.post("/copii", (req, res) => {
  data.push({
    childName: req.body.childName,
    phoneNumber: req.body.phoneNumber,
  });
  res.json({
    childName: req.body.childName,
    phoneNumber: req.body.phoneNumber,
  });
});

app.get("/get-inscrieri", (req, res) => {
  res.json(data);
});

app.delete("/deleteAll-inscrieri", (req, res) => {
  data = [];
  res.json(data);
});
app.delete("/deleteLatest-inscrieri", (req, res) => {
  data.pop();
  res.json(data);
});

app.put("/edit-inscrieri/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  if (data[id] != null) {
    data[id].childName = name;
    data[id].phoneNumber = phoneNumber;
  } else {
    console.log("error the children have escaped");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
