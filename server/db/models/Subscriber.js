const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    versionKey: false // You should be aware of the outcome after set to false
  }
);

module.exports = Subscriber = mongoose.model(
  "subscribers_emails",
  subscriberSchema
);
