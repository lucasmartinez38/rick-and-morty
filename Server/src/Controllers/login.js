


const users = require('../Utils/users')
///////////////////////////////////////
const login = ( req, res ) => {
    const {email, password} = req.query;
    ///////////////////////////////////////////////
    const userFound = users.find((user) => 
    user.email === email && user.password === password)
    ///////////////////////////////////////////////
    // if(userFound) return res.status(200).json({ success: true })
    // return res.staus(404).json({ success: false })
    return userFound
    ? res.status(200).json({ access: true })
    : res.status(404).json({ access: false })
}
module.exports = login;