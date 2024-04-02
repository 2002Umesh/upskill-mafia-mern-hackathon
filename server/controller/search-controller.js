const Mentor = require("../models/mentor-model");

const searchMentorsByCourses = async (req, res) => {
  try {
    // Get the search query from the request parameters
    const query = req.query.query;

    // Perform the search in the Mentor collection
    const result = await Mentor.find({
      courses: { $regex: new RegExp(query, "i") },
    });
    console.log(query);
    console.log(result.length);
    // Send the search results back to the client
    res.send(result);
  } catch (error) {
    console.error("Error searching mentors by courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const searchBar = async (req, res) => {
    try {
        // Get the search query from the request parameters
        const query = req.query.query;
    
        // Perform the search using aggregation pipeline
        const result = await Mentor.aggregate([
          {
            $match: {
              courses: { $regex: new RegExp(query, "i") }
            }
          },
          {
            $project: {
              matchedCourses: {
                $filter: {
                  input: "$courses",
                  as: "course",
                  cond: { $regexMatch: { input: "$$course", regex: new RegExp(query, "i") } }
                }
              },
              _id: 0
            }
          }
        ]);
    
        // Extract and flatten the matched courses from the search results
        const matchedCourses = result.flatMap(mentor => mentor.matchedCourses);
    
        // Return unique matched courses using Set
        const uniqueMatchedCourses = [...new Set(matchedCourses)];
    
        // Send the unique matched courses back to the client as a JSON response
        res.status(200).send(uniqueMatchedCourses);
      } catch (error) {
        console.error('Error searching mentors by courses:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    
    }
module.exports = {
  searchMentorsByCourses,searchBar
};
