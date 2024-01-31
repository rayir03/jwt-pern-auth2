const router = require("express").Router();
const pool = require("../db");


//registeing
router.post("/register", async (req, res) => {
    try {

        //1. destructure the req.body (name, email, password)

        const { name, email, password} = req.body;

        //2. check if user exist (if user exist then throe error)

        const user = await pool.query("SELECT * FROM users WHERE user_mail = $1", [
            email
        ]);
        if(user.rows.length !== 0) {
            return res.status(401).send("User already exist");
        }

        
        //3. Bcrypt the user password

        //4. enter the new user inside our database

        //5. generatin our jwt token

        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;