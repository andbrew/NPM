const log4js = require("log4js");
let logger = log4js.getLogger();
logger.level = "debug"; //"production"
logger.info("App started correctly.");
logger.warn("Missing dependency.");
logger.error("Function not defined.");
logger.fatal("Crash.");

function add(a, b) {
	return a+b;
}
module.exports = add;
