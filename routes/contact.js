import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Mail- sagul***@gmail.com phone- 8667202***");
});

export default route;
