import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Service's Available slect from 1-5");
});

let serviceList = [
  {
    id: 1,
    service: "Web-development",
  },
  {
    id: 2,
    service: "UI-UX desiging",
  },
  {
    id: 3,
    service: "Python Development",
  },
  {
    id: 4,
    service: "AI Developmwnt",
  },
  {
    id: 5,
    service: "BAck-end Developmwnt",
  },
];
route.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const output = serviceList.find((service) => service.id === id);
  console.log(id);
  if (output) {
    res.send("The selected service is " + '"' + output.service + '"');
  } else {
    res.json("Invalid service");
  }
});
export default route;
