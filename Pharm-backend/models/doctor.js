const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressInfo = {
  street: String,
  aptName: String,
  locality: String,
  zip: String,
  lat: Number,
  lng: Number,
  phoneNo: Number,
};

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    formattedAddress: {
      type: String,
      required: true,
    },
    imageUrl: [
      {
        type: String,
        required: true,
      },
    ],
    address: addressInfo,
    payment: [
      {
        type: String,
        // enum: ["CASH", "ONLINE_PAYMENT", "UPI"],
        required: true,
      },
    ],
    account: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    time : {
      type: [String]
    },
    Fees : {type : String},
    time_app :{type: String},
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
