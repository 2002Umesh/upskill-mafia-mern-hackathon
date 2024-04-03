const Mentor = require("../models/mentor-model");

const mentors = async (req, res) => {
  try {
    const response = await Mentor.find();
    if (!response) {
      res.status(404).json({ msg: "no Mentor found" });

      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`Mentor error: ${error}`);
  }
};
const mentorsupdate = async (req, res) => {
  try {
    const updateResult = await Mentor.updateMany({}, { $set: { isMentor: true } });
   
    res.status(200).json({ msg: "msg" });
  } catch (error) {
    console.log(`Mentor error: ${error}`);
  }
};

const mentorById = async(req,res,next)=>{
  try {
    const id = req.params.id;
    const data = await Mentor.find({_id:id});
    if (!id || id.length === 0) {
      return res.status(404).json({ message: "Unable to find service" });
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {mentors,mentorById,mentorsupdate};
