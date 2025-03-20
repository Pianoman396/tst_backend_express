const config = require("./config.global");

config.log.console = true;
config.log.debug = true;

config.sample_db = "mongodb://user:dev@localhost:27017/test_api";

config.jwt.secretKey = "jwt-test-secretKey";
config.jwt.verify.maxAge = 604800;

module.exports = config;
