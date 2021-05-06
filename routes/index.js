module.exports = (app) => {
	const pollution = require("../controllers/pollutionController");
	const upload = require("../controllers/submitController");
	const home = require("../controllers/homeController");
	const page404 = require("../controllers/404Controller");

	app.get("/", home);
	app.post("/api", upload, pollution.addRow);
	app.get("/api/all", pollution.index);
	app.get("*", page404);
};
