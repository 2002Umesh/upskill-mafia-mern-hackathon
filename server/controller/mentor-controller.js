const Mentor = require("../models/mentor-model");
const User =require("../models/user-model")

const mentors = async (req, res) => {
  try {
    const response = await User.find({isMentor:true});
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
    console.log(id)
    const data = await User.find({_id:id});
    if (!id || id.length === 0) {
      return res.status(404).json({ message: "Unable to find service" });
    }
    console.log(data)
     res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {mentors,mentorById,mentorsupdate};
