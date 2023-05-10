const express = require("express");
const router = express.Router();
const math = require('mathjs');

router.post('/', (req, res) => {
    //here we are extracting input i.e multiple mathematical expressions as array of string
    const { expressions } = req.body;
    if (expressions && expressions.length) {
        const response = [];
        expressions.map((expression) => {
            if (expression != "end") {
                const result = {};
                result["input"] = expression;
                result["output"] = math.evaluate(expression);
                response.push(result);
            }
        })
        res.status(200).json({
            data: {
                message: "expressions are evaluated",
                response: response,
            }
        })
    } else if (expressions && !expressions.length) {
        res.status(200).json({
            data: {
                message: "expressions are not present"
            }
        })
    } else {
        res.status(404).json({
            data: {
                message: "Not able to process your request"
            }
        })
    }
    
})

module.exports = router;