module.exports = (req, res, next) => {
	console.log("Error 404");
	res.status(404).render("404.ejs");
};
