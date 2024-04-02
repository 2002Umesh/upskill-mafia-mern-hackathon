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

const mentorById = async(req,res)=>{
  try {
    const id = req.params.id;
    const data = await Mentor.find( req.query);
    
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {mentors,mentorById};
