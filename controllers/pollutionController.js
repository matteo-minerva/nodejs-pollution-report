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
							name: "Error 404",
							message: "Page not found",
						},
					});
				}

				let resultJson = JSON.parse(JSON.stringify(results));

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

	addRow: (req, res, next) => {
		if (!req.file) {
			console.log(error.stack);
			res.status("400").render("error.ejs", {
				error: {
					name: "Error 404",
					message: "No file were selected",
				},
			});
		}

		const data = {
			location: req.body.location,
			image: req.file.filename,
		};

		const results = db.query(
			`INSERT INTO pollution (location, photographSrc) VALUES ('${data.location}', '${data.image}');`,
			(error, results, fields) => {
				if (error) {
					console.log(error.stack);
					res.status("500").render("error.ejs", {
						error: {
							name: error.name,
							message: error.message,
						},
					});
				}
				console.log("Data inserted");

				res.json({
					message: "success",
					data: { ...data },
				});
			}
		);
	},
};

module.exports = Pollution;
