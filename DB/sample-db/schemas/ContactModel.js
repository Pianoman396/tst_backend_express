const { Schema, mongoose } = require("mongoose");
const sequence = require("mongoose-sequence");
const AutoIncrement = sequence(mongoose);

const contacts = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    patronymic: { type: String, required: false },
    phone: { type: Number, required: false },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

contacts.plugin(AutoIncrement, { inc_field: 'id' });

contacts.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// const ContactModel = mongoose.model('Contact', contacts);
// module.exports = ContactModel;
module.exports = contacts;