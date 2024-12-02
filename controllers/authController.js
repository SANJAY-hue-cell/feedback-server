const Response = require('../models/response') ;

const test = (req , res) => {
    return res.json('Test is working') ;
}

const handleSubmit = async (req, res) => {
    try {
      const { submittedValues ,suggestions } = req.body;
  
      // Validate input
      if (!submittedValues || !Array.isArray(submittedValues)) {
        return res.status(400).json({ error: "Feedback is required and must be an array." });
      }
  
      // Create a new response in the database
      const response = await Response.create({ submittedValues , suggestions });
  
      // Send success response
      return res.json({ message: "Feedback submitted successfully!", response });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error. Please try again later." });
    }
  };

  const getResponses = async (req, res) => {
    try {
      const responses = await Response.find(); // Fetch all responses from the database
      return res.json(responses); // Return the data as JSON
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error. Could not retrieve responses." });
    }
  };
  


module.exports = {
    test ,
    handleSubmit ,
    getResponses
}