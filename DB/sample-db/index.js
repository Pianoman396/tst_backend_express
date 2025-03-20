const { sampleDB } = require("../../services/database.service");
// function connectionFactory() {
//   const { connection } = sampleDB;
//
//   // conn.model("SampleModel", require("./schemas/SampleModel"), "collection");
//   connection.model("UserModel", require("./schemas/UserModel"), "users_collection");
//   connection.model("CompanyModel", require("./schemas/CompanyModel"), "companies_collection");
//   connection.model("ContactModel", require("./schemas/ContactModel"), "contacts_collection");
//
//   return connection;
// }

async function userFactory() {
  return sampleDB.model(
    "UserModel",
    require("./schemas/UserModel"),
    "users_collection"
  );
}

async function companyFactory() {
  return sampleDB.model(
    "CompanyModel",
    require("./schemas/CompanyModel"),
    "companies_collection");
}

async function contactFactory() {
  return sampleDB.model(
    "ContactModel",
    require("./schemas/ContactModel"),
    "contacts_collection");
}

module.exports = {
  userFactory,
  companyFactory,
  contactFactory,
};
