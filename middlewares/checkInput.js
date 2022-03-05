const checkInput = (req, res, next) =>{
    const module_name = req.body.module_name;
    const screen_name = req.body.screen_name;

    if(module_name == "trade license" && screen_name == "applied"){
        console.log("file is serving now");
        next();
    }else{
        return res.status(401).json("please enter the right module_name and screen_name to access the file");
    }
}

module.exports = checkInput;