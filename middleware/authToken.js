const jwt = require("jsonwebtoken")


async function authToken(req, res, next){
    try {
        const token = req.cookies?.token

        if(!token){
            return res.status(200).json({
                message : "User not found",
                error : true,
                success : false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            console.log("error", err)
            
            if(err){
                console.log("error auth", err)
            }

            req.userId = decoded?._id

            next()
            
          });

        
    } catch (error) {
        res.status(500).json({
            message: error.message || error || "Internal Server Error",
            data : [],
            error : true,
            success : false
        })
    }
}
module.exports = authToken