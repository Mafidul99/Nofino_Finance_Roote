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
         res.status(200).send('Welcome to register Page');        
    } catch (error) {
        res.status(400).send({msg: "page Not Found!"});        
    }
};

module.exports = {home, register};