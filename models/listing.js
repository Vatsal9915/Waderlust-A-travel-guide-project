const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://unsplash.com/photos/person-stands-atop-rocky-landscape-at-dusk-2zvWgdH5PBU",
    set: (v) => v === ""? "https://unsplash.com/photos/person-stands-atop-rocky-landscape-at-dusk-2zvWgdH5PBU":v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
