const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

/* Defines where to store files and names them uniquely */
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./public/uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "_" + uuidv4() + ".jpg");
	},
});
const upload = multer({ storage });

module.exports = (app) => {
	const pollution = require("../controllers/pollutionController");
	const home = require("../controllers/homeController");
	const page404 = require("../controllers/404Controller");

	app.get("/", home);
	app.post("/api", upload.single("photograph"), pollution.addRow);
	app.get("/api/all", pollution.index);
	app.get("*", page404);
};
