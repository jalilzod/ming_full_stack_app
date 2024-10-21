const User = require('../modules/User');



exports.register = (req,res)=>{
    let tmpUser = new User(req.body);
}


exports.about = (req,res)=>{
    res.send('About');
}


exports.main = (req,res)=>{
    res.send('Main');
}