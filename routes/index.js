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
	const siteRoot = require("../routes/root");

	app.get("/", siteRoot);
	app.post("/api", upload.single("photograph"), pollution.addRow);
	app.get("/api/all", pollution.index);
};
