import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Service's Available slect from 1-5");
});

let serviceList = [
  {
    domain: "Web-development",
  },
  {
    domain: "UI-UX desiging",
  },
  {
    domain: "Python Development",
  },
  {
    domain: "AI Developmwnt",
  },
  {
    domain: "BAck-end Developmwnt",
  },
];

route.get('/:id', (req, res) => {
  res.send(req.service.domain);  //domain are the names of the service list items
});
route.param('id', (req, res, next, id) => {
  req.service = serviceList[id - 1]; //-1 is used bcoz the array starts from 0 so the index to recognize 1 we use -1 in this 
  next();
});
export default route;
