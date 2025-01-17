const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

// http logger
app.use(morgan("combined"));

//template engine
app.engine("handlebars", handlebars.engine({
    extname: ".oce",
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

console.log(
  'path.join(__dirname, "resources/views"): ',
  path.join(__dirname, "resources/views")
);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
