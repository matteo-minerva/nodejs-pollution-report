module.exports = (req, res, next) => {
	res.status(404).render("error.ejs", {
		error: {
			number: "404",
			message: "Page not found",
		},
	});
};
