const config = require("./config.global");

config.jwt.secretKey = "";
config.jwt.sign = {};
config.jwt.sign.issuer = "Test API js backend";
config.jwt.sign.audience = "";
config.jwt.verify = {};
config.jwt.secretKey = "jwt-secretKey";
config.jwt.verify.maxAge = 604800;

// DB SETTINGS
config.dbs = {};
config.dbs.sample_db = {};
config.dbs.sample_db.uri = "mongodb://user1:dev1@localhost:27017";//"mongodb://user:password@db_host";
config.dbs.sample_db.database = "test_api";
config.dbs.sample_db.id = "test_api";

module.exports = config;
