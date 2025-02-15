const express = require('express') ;
const router = express.Router() ;
const cors = require('cors') ;
const { test, handleSubmit, getResponses } = require('../controllers/authController');

// middleware
router.use(
    cors({
        credentials : true ,
        origin : 'http://localhost:3000'
    })
)

router.get('/' , test);
router.post('/response' , handleSubmit) ;
router.get('/responses' , getResponses) ;

module.exports = router ;