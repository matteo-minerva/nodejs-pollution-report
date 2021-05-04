const express = require("express");
const routes = require("./routes");
const app = express();
const router = express.Router();
require("./routes");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
routes(app);

app.listen(process.env.port || 3000);
console.log("Server running...");
