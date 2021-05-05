const db = require("../models/dbconnection");
const path = require("path");

const Pollution = {
	//function to query all items
	index: (req, res, next) => {
		const results = db.query(
			"SELECT * from pollution",
			(error, results, fields) => {
				if (error) {
					console.log(error.stack);
					res.status("500").render("error.ejs", {
						error: {
							number: error.errno,
							message: error.sqlMessage,
						},
					});
					return;
				}

				/* result needs to get parsed to be displayed as JSON */
				let resultJson = JSON.parse(JSON.stringify(results));

				/* json gets constructed */
				let data = [];
				resultJson.forEach((item) => {
					data.push({
						...item,
						photographSrc: path.join("uploads", item.photographSrc),
					});
				});

				res.json(data);
			}
		);
	},

	//function to add a new row
	addRow: (req, res, next) => {
		/* checks if the file is an img, if not error page gets displayed */
		const ext = path.extname(req.file.originalname);
		if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
			return res.status("500").render("error.ejs", {
				error: {
					number: 500,
					message: "Only images are allowed",
				},
			});
		}

		/* format data as json */
		const data = {
			location: req.body.location,
			image: req.file.filename,
		};

		/* actual query */
		const results = db.query(
			`INSERT INTO pollution (location, photographSrc) VALUES ('${data.location}', '${data.image}');`,
			(error, results, fields) => {
				if (error) {
					console.log(error.stack);
					res.status("500").render("error.ejs", {
						error: {
							number: error.errno,
							message: error.sqlMessage,
						},
					});
					return;
				}
				console.log("Data inserted");

				/* JSON gets displayed */
				res.json({
					message: "success",
					data: { ...data },
				});
			}
		);
	},
};

module.exports = Pollution;
