const User = require("../models/user-model");
// const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to Server Start Router');

    } catch (error) {
        console.log(error);
        res.status(500).send({
            msg: "page Not Found!"
        });

    }
};

const register = async (req, res) => {
    try {
        const {
            username,
            email,
            phone,
            password
        } = req.body;

        const userExist = await User.findOne({
            email
        });

        if (userExist) {
            return res.status(400).json({
                msg: "Email alredy Exists !..."
            })
        }

        // hash password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });

        res.status(201).json({
            msg: "Registration Successfully Done..",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        res.status(500).json("Internal Server Error !..");
    }
};


// user LoginMenu
const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const userExist = await User.findOne({
            email
        });

        if (!userExist) {
            return res.status(400).json({
                msg: "Invalid Credentials..."
            });
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(200).json({
                msg: "Login Successfully Done..",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({msg: "Invalid Email or Password.."})
        }

    } catch (error) {
        res.status(500).json("Internal Server Error !..");
    }
}

module.exports = {
    home,
    register,
    login
};