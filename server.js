/* Aggiungere error handling */

const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

require("./routes");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
routes(app);

app.on("error", (e) => {
	if (e.code === "ECONNREFUSED") {
		console.log(e.name, e.message);
		setTimeout(() => {
			server.close();
			server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
		}, 1000);
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
