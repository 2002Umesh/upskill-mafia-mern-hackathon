const { Schema, model } = require("mongoose");

const mentorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  rating: { type: Number, required: true },
  testimonials: [
    {
      name: { type: String, required: true },
      review: { type: String, required: true },
    },
  ],
  courses: [
    {
      title: { type: String, required: true },
      duration: { type: String, required: true },
      rating: { type: Number, required: true },
    },
  ],
  image: { type: String, required: true },
});

const Mentor = model("Mentor", mentorSchema);

module.exports = Mentor;

