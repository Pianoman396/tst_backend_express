const logger = require("../../../services/logger.service")(module);
const { OK } = require("../../../constants/http-codes");
const JwtService = require("../../../services/jwt.service");
const jwtConfig = require("../../../config").jwt;
const { userFactory, companyFactory, contactFactory } = require("../../../DB/sample-db");
const { compare } = require("bcrypt");


async function test(req, res) {
  // const userModel = await userFactory();
  // userModel({
  //   id: 1,
  //   full_name: 'test12',
  //   email: "test@test.com",
  //   password: "test123"
  // }, (err, result) => {});
  // userModel.save();
  const { email, password } = req.body;
  const userModel = await userFactory();
  const data = new userModel({
    full_name: 'test1265487',
    email,
    password,
    created_at: Date.now(),
  });
  data.save();
  // await userFactory().create({
  //   full_name: 'test1265487',
  //   email,
  //   password,
  //   created_at: Date.now(),
  // }, {ordered: true});
  // console.log(await userFactory().find({}, {full_name: 1, _id: 0}), '1231231');
  return {test: "works"};
}

async function login(req, res) {
  logger.init("login")
  const { email, password } = req.body
  const user = await userRepository.findByEmail(email)
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ code: 401, message: "Invalid credentials" });
  }

  const token = new JwtService(jwtConfig).encode(user).data;
  res.json({ message: "Login successful", token });
}

module.exports = {
  login,
  test
};