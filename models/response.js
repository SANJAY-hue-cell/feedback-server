const mongoose = require('mongoose') ;
const {Schema} = mongoose ;

const responseSchema = new Schema({
    submittedValues: {
      type: [Number], // Array of numbers for range values
      required: true,
    },
    suggestions : {
      type : String 
    }
  });
  
  
  

const ResponseModel = mongoose.model('Responses' , responseSchema) ;

module.exports = ResponseModel ;