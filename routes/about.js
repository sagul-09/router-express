import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Im sagul from CSE department III yr");
});
export default route;
