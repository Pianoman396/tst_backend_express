const { Schema, mongoose } = require("mongoose");
const sequence = require("mongoose-sequence");
const AutoIncrement = sequence(mongoose);

const users = new mongoose.Schema(
  {
    // _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    id: { type: Number, unique: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    token: { type: String },
    full_name: { type: String },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

users.plugin(AutoIncrement, { inc_field: 'id' });

users.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// const UserModel = mongoose.model('Users', users);
// module.exports = UserModel;
module.exports = users;