const client = require("../db")


async function getStudents(req, res) {
    const result = await client.query("select *from users")
    res.send(result.rows);
}


async function addStudents(req, res) {
    let { name, stage } = req.body;
    const result = await client.query(`insert into students (name,stage)
    values ('${name}','${stage}') RETURNING *`);
    res.send(result.rows);
}

module.exports = {
    getStudents,
    addStudents,
};
//getStudent()
//addStudent("mustafa", "7th")