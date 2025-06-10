const userModel = require("../../models/userModel");

async function allUsers(req, res) {
    try {
        const allUsers = await userModel.find()

         res.json({
            message: "All users",
            data : allUsers,
            error: false,
            success: true,
         })
        
    } catch (error) {
        res.status(500).json({ 
            message: error.message || error || "Internal Server Error",
            error : true,
            success : false 
        });
        
    }
}

module.exports = allUsers