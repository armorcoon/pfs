const User = require('../models/User');

//#desc get all users
//@route GET /api/v1/user

exports.getUsers = async(req,res,next) =>{
    try {
        const users = await User.find();

        return res.status(200).json({
            success:true,
            count:users.length,
            data:users
        });
    } catch (error) {
        console.error(err);
        res.status(500).json({error:'server error'});
        
    }
};
//@desc add an user
//@route POST /api/v1/users
//@access public
exports.addUsers = async(req,res,next) => {
    try {
        //create data in database 
        const user = await User.create(req.body);
        //send the response 
        return res.status(200).json({
            success:true,
            data:user
        });
       }catch (err) {
        console.error(err);
        if(err.code === 11000){
            return res.status(400).json({error:'The user already exists'});
        }
        res.status(500).json({error:'server error'});       
    }
};