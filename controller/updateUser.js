const userModel = require("../models/userModel");

async function updateUser(req, res){
    try {
        const sessionUser = req.userId

        const { userId, email, name, role } = req.body

        const payload = {
            ...( email && {email : email}),
            ...( name && {name : name}),
            ...( role && {role : role}),
        }

        const user = await userModel.findById(sessionUser)

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.json({
            data : updateUser,
            message : "User Updated",
            success : true,
            error : false
        })
        
    } catch (error) {
        res.status(500).json({ 
            message: error.message || error || "Internal Server Error",
            error : true,
            success : false 
        });
    }
}

module.exports = updateUser