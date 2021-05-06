const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

/* Defines where to store files and names them uniquely */
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./public/uploads/");
	},
	filename: function (req, file, cb) {
		const ext = path.extname(file.originalname);
		cb(null, file.fieldname + "_" + uuidv4() + ext);
	},
});

const upload = multer({
	storage,
	/* checks form input */
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype !== "image/png" &&
			file.mimetype !== "image/jpg" &&
			file.mimetype !== "image/gif" &&
			file.mimetype !== "image/jpeg"
		) {
			req.errorObj = {
				number: 500,
				message: "Only images allowed",
			};
			return cb(null, false, new Error("Only images allowed"));
		} /* endif */

		if (new RegExp("\\s+").test(req.body.location)) {
			req.errorObj = {
				number: 500,
				message: "Location can't be empty",
			};
			return cb(null, false, new Error("Location can't be empty"));
		} /* endif */

		cb(null, true);
	},
}).single("photograph");

module.exports = upload;
