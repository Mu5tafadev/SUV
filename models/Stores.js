const client = require("../db")


async function getStores(req, res) {
    const result = await client.query(`select * from stores`)
    res.send(result.rows);
}


async function addStores(req, res) {
    let { description,title,phone,address } = req.body;
    const result = await client.query(`insert into stores (description,title,phone,address)
    values ('${description}','${title}','${phone}','${address}') RETURNING *`);
    res.send(result.rows);
}

module.exports = {
    getStores,
    addStores,
};
//getStudent()
//addStudent("mustafa", "7th")