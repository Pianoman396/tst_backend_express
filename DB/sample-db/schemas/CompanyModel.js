const { Schema, mongoose } = require("mongoose");
const sequence = require("mongoose-sequence");
const AutoIncrement = sequence(mongoose);
const Contact = mongoose.model("Contact");


const photoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
  thumbpath: {
    type: String,
    required: true,
  },
});

const companies = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    contactId: { type: String, ref: "Contact" },
    name: { type: String, required: true },
    shortName: { type: String, required: false },
    address: { type: String, required: true },
    businessEntity: { type: String, required: false },
    contract: {
      no: { type: String, required: false },
      issue_date: { type: Date, required: false },
    },
    type: { type: String, enum: ["agent", "contractor"], required: false },
    status: { type: String, required: true, default: "active" },
    photos: { type: [photoSchema], required: false },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

companies.plugin(AutoIncrement, { inc_field: 'id' });

companies.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

// const CompanyModel = mongoose.model('Company', companies);
// module.exports = CompanyModel;
module.exports = companies;