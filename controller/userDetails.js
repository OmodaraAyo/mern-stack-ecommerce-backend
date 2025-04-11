const userModel = require("../models/userModel");

async function userDetailController(req, res){
    try { 
        // console.log("user id", req.userId)
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"

        })


    } catch (error) {
        res.status(500).json({ 
            message: error.message || error || "Internal Server Error",
            error : true,
            success : false 
        });
        
    }
}

module.exports = userDetailController 