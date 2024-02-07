const client = require("../db")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


async function register(req, res) {
    let { username, email, password } = req.body;
    const hashpassword = bcrypt.hashSync(password, 10);
    const result = await client.query(`insert into users (username,email,pass)
    values ('${username}','${email}','${hashpassword}') RETURNING *`);
    res.send({
        success: true,
        user: result.rows[0],
    });
}


async function login(req, res) {
    let { username, password } = req.body;
    const result = await client.query(`select * from users where username ='${username}'`);
    if (result.rows.length === 0)
        res.send({ success: false, msg: "User not found" });
    else {
        let user = result.rows[0];
        const match = await bcrypt.compare(password, user.pass);
        if (match) {
            var token = jwt.sign(user, 'shhhhh');
            res.send({ success: true, token, user });
        }
        else res.send({ success: false, user, msg: "wrong password!" });
    }

}


async function getusers(req, res) {
    const result = await client.query(`SELECT * FROM users`);
    res.send(result.rows);
}

// async function adduser(req, res) {
//     let { username, email, password } = req.body;
//     const hashPassword = bcrypt.hashSync(password, 10);
//     const query = `INSERT INTO users (username, email, pass)
//         VALUES ('${username}', '${email}', '${password}') RETURNING *`;
//     const values = [username, email, hashPassword];
//     const result = await client.query(query, values);
//     res.send({ success: true, user: result.rows[0] });
// }

// async function deleteuser(req, res) {
//     const { id } = req.params;
//     const result = await client.query(`DELETE FROM users WHERE id = '${id}' RETURNING *`, [id]);
//     res.send({ success: true, user: result.rows[0] });
// }

// async function updateuser(req, res) {
//     const { id } = req.params;
//     let { username, email, password } = req.body;
//     const hashPassword = bcrypt.hashSync(password, 10);
//     const query = (`UPDATE users SET username = '${username}', email = '${email}', pass = '${password}' WHERE id = '${id}' RETURNING *`);
//     const values = [username, email, hashPassword, id];
//     const result = await client.query(query, values);
//     res.send({ success: true, user: result.rows[0] });
// }

module.exports = {
    register,
    login,
    getusers,
    // adduser,
    // deleteuser,
    // updateuser,
};




//getuser()
//adduser("mustafa", "7th")