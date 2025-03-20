db = db.getSiblingDB('test_api');

db.createUser(
  {
    user: "user1",
    pwd: "dev1",
    roles: [
      { role: "readWrite", db: "test_api" }
    ]
  })

db.createCollection('users_collection');
// db.users_collection.createIndex({ "id": 1 }, { unique: true });
db.createCollection('companies_collection');
// db.companies_collection.createIndex({ "id": 1 }, { unique: true });
db.createCollection('contacts_collection');
// db.contacts_collection.createIndex({ "id": 1 }, { unique: true });
