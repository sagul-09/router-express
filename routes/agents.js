import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Agents Available sleect from 1-5");
});

let agentsList = [
  {
    id: 1,
    agent: "Reyna",
    role: "Duelist",
  },
  {
    id: 2,
    agent: "sage",
    role: "controller",
  },
  {
    id: 3,
    agent: "brim",
    role: "controller",
  },
  {
    id: 4,
    agent: "Skye",
    role: "initiator",
  },
  {
    id: 5,
    agent: "omen",
    role: "controller",
  },
];
route.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const output = agentsList.find((agent) => agent.id === id);
  console.log(id);
  if (output) {
    res.send(
      "The agent is " +
        '"' +
        output.agent +
        '"' +
        " and the role of the agent is " +
        '"' +
        output.role +
        '"'
    );
  } else {
    res.json("Invalid agent");
  }
});
export default route;
