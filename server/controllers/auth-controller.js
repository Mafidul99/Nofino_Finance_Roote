const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to Server Start Router');
        
    } catch (error) {
        console.log(error);
        res.status(400).send({msg:"page Not Found!"}); 
        
    }
};

const register = async (req, res) => {
    try {
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg: "Email alredy Exists !..."})
        }

        const userCreated = await User.create({username, email, phone, password});

         res.status(200).json({msg: userCreated});        
    } catch (error) {
        res.status(500).json("Internal Server Error !..");        
    }
};

module.exports = {home, register};