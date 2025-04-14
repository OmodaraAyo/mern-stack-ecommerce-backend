const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email: email });

    if (!user) {
      throw new Error("Invalid username or password. Please try again.");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    // console.log("Checking password", checkPassword);
    if (!checkPassword) {
      throw new Error("Invalid username or password. Please try again.");
    }else{
        //generate web token
        const tokenData = {
            _id : user.id,
            email : user.email

        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

        const tokenOption = {
          httpOnly : true,
          secure : true,
        }

        res.cookie("token", token, tokenOption).json({
            message : "Login successfully",
            data : token,
            success : true,
            error : false
        })
        
    }
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignInController;
// This function is a placeholder for the user sign-in controller.
