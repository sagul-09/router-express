import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("This is a login page");
})
export default route;


