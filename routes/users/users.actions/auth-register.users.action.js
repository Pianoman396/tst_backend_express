const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const JwtService = require("../../../services/jwt.service");
const jwtConfig = require("../../../config").jwt;
const { connectionFactory } = require("../../../DB/sample-db");
const { hash } = require("bcrypt");

async function register(req, res) {
  logger.init("register")
  let { name, email, password } = req.body
  const user = await userRepository.findByEmail(email)
  if (user) {
    return res.status(400).json({ code: 400, message: "Email already used" });
  }
  password = await hash(password, 10)
  await userRepository.insert({name, email, password})
  res.json({ message: "Register successful" });
}

module.exports = {
  register
};