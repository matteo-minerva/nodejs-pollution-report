const multer = require("multer");
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./public/uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "_" + Date.now() + ".jpg");
	},
});
const upload = multer({ storage: storage });

module.exports = (app) => {
	const pollution = require("../controllers/pollutionController");
	const home = require("../controllers/homeController");
	const page404 = require("../controllers/404Controller");

	app.get("/", home);

	app.post("/api", upload.single("photograph"), pollution.addRow);
	app.get("/api/all", pollution.index);

	app.get("*", page404);
};
