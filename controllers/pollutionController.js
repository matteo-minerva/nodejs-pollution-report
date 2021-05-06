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
	} /* end index() */,

	//function to add a new row
	addRow: (req, res, next) => {
		if (req.errorObj) {
			return res.status("500").render("error.ejs", {
				error: {
					number: req.errorObj.number,
					message: req.errorObj.message,
				},
			});
		} /* endif */

		const data = {
			location: req.body.location,
			photographSrc: path.join("uploads", req.file.filename),
		};

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

				res.json({
					message: "success",
					data: { ...data },
				});
			}
		); /* end query */
	} /* end addRow() */,
};

module.exports = Pollution;
