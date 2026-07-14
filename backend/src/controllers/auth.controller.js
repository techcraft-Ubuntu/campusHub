
const health = (req,res)=>{
    res.json({
        success: true,
        message: "Server Healthy"
    });
}
const User = require("../models/user.model");

const register = async (req,res) =>{
      const {name,email,password} = req.body;
      const user = await User.create({
        name,
        email,
        password
      });
      if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
      }
      res.json({
        success : true, 
        message: "Register Successfully"
      });
}

module.exports = {health,register};