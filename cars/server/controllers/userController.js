import User from "../models/user"
import bcrypt from "bcrypt"
import { JsonWebTokenError } from "jsonwebtoken";

//GEnerate jwt token
 const generateToken = (userId) =>{
    const payload = userId;
    return JsonWebTokenError.sign(payload, process.env.JWT_SECRET)
 }

 //register user
export const registerUser = async(req, res) =>{
    try {
        const {name, email,password} = req.body

        if(!name || !email || !password || password.length < 8){
            return res.json({success:false, message:"Fill all the fields"})
        }
        const userExists = await User.findOne({email})
        if(userExists){
             return res.json({success:false, message:"Users already exists "})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password :hashedPassword})

      const token = generateToken(user._id.toString())
      res.json({success:true,token})
    } catch (error) {
       console.log(error.message)
       res.json({success:false, message:"Users already exists "})
    }
}

//login User

export const loginUser = async (req, res) =>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({success:false, message:"user not found"})
        }
        const isMath = await bcrypt.compare(password, user.password)
        if(!isMath){
            return res.json({success:false, message:"invalid password"})
        }
        const token = generateToken(user._id.toString())
        res.json({success:true, token})
    } catch (error) {
       console.log(error.message)
       res.json({success:false, message:"Users already exists "})
    }
}