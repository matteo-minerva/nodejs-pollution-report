/* Aggiungere error handling */

const express = require("express");
const routes = require("./routes");
const app = express();

const sslRedirect = require("heroku-ssl-redirect").default;
app.use(sslRedirect());

require("./routes");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
routes(app);

app.listen(process.env.PORT || 3000);
console.log("Server running...");
