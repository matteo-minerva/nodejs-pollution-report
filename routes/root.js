const path = require("path");

module.exports = (req, res, next) => {
	res.render(path.resolve("./public/index.ejs"));
};
