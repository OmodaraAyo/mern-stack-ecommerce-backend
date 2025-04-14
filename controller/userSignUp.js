const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function userSignUpController(req, res) {
    // console.log("req.body", req.body)
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email: email})
    if(user){
        throw new Error("Email already exists");
    }
    
    if (!name) {
      throw new Error("Please provide name");
    }
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword){
        throw new Error("Something went wrong");
    }

    const payload = {
        ...req.body,
        role : "USER",
        password:  hashPassword,
    }

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
        data : saveUser,
        success : true,
        error : false,
        message: "Account created successfully",
    })

  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
// const userModel = require("../models/userModel");