import express from "express";

import about from "./routes/about.js";
import agents from "./routes/agents.js";
import login from "./routes/login.js";
import contact from "./routes/contact.js";
import service from "./routes/service.js";

const app = express();

app.get('/', (req, res) => {
  res.send("Home page");
});


app.use("/about", about);
app.use("/agents", agents);
app.use("/login", login);
app.use("/contact", contact);
app.use("/service", service);

app.listen(1200, () => {
  console.log("Local host is working");
});
