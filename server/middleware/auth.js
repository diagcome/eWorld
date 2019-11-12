const jwt = require('jsonwebtoken');
const { secret } = require('../config/token').jwt;

module.exports = (req, res, next) => {
    
    const authHeader = req.get('Authorization')

    if(!authHeader){ 
        res.status(401).json({message: "Invalid data, re-login, please!!!"});
    }
    try {
        const token = authHeader.replace("Bearer ", "");
        const payload = jwt.verify(token, secret);

       if(payload.type != 'access') {
           res.status(400).json({ message: "Invalid data, re-login, please!!!"})
       }
    } catch(error) {
    
        if(error instanceof jwt.JsonWebTokenError){
            res.status(401).json({message: "Error data, re-login, please!!!"});
        } else if (error instanceof jwt.TokenExpiredError) {   
            res.status(400).json({ message: "Session expired! Re-login , please"});    
        }
        return error;
    };
    next();
};