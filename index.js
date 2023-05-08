import express from "express";

import about from "./routes/about.js";
import login from "./routes/login.js";
import contact from "./routes/contact.js";
import service from "./routes/service.js";

const app = express();

// app.use(express.static("views")\)); // to use the public folder which contains the html file 

// app.set("view engine", "ejs");

// app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  // res.sendStatus(404);
  res.send("Home page");
  // res.render("index.ejs");
});



app.use("/about", about);
app.use("/login", login);
app.use("/contact", contact);
app.use("/service", service);

app.listen(1200, () => {
  console.log("Local host is working");
});
