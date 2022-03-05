const router = require('express').Router();
const fs = require('fs');
const checkInput = require('../middlewares/checkInput');


router.post('/', checkInput,(req, res)=>{

    fs.readFile("testFile.txt", 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.status(200).json(data);
      })
});

module.exports = router;
