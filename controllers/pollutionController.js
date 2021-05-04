const db = require("../models/dbconnection");
const path = require("path");

const Pollution = {
	//function to query all items
	index: (req, res) => {
		const results = db.query(
			"SELECT * from Pollution",
			(error, results, fields) => {
				if (error) {
					throw error;
				}

				let resultJson = JSON.parse(JSON.stringify(results));

				let data = [];
				resultJson.forEach((item) => {
					data.push({
						...item,
						photographSrc: path.join("http://", "uploads", item.photographSrc),
					});
				});

				res.json(data);
			}
		);
	},

	addRow: (req, res, next) => {
		if (!req.file) {
			return res.status(400).send("No files were uploaded");
		}

		const data = {
			location: req.body.location,
			image: req.file.filename,
		};

		const results = db.query(
			`INSERT INTO Pollution (location, photographSrc) VALUES ('${data.location}', '${data.image}');`,
			(error, results, fields) => {
				if (error) {
					throw error;
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
