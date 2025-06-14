async function userLogout(req, res){
    try {
        res.clearCookie("token").json({
            message : "Logout successfully",
            error : false,
            success : true,
            data : []
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || error || "Internal Server Error",
            error : true,
            success : false
        })
    } 
}

module.exports = userLogout