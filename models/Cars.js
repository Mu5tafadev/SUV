const client = require("../db")


async function getCars(req, res) {
    const result = await client.query(`select * from Cars`)
    res.send(result.rows);
}


async function addCars(req, res) {
    let { name, model, description, color } = req.body;
    const result = await client.query(`insert into Cars (name,model,description,color)
    values ('${name}','${model}','${description}','${color}') RETURNING *`);
    res.send(result.rows);
}

// /////


async function updateCars(req, res) {
    const id = req.params.id; // Assuming id is passed as a parameter in the URL
    const { name, model, image, description, number, type, color, price,store_id } = req.body;
    // Update the store in the database based on the provided id
    const result = await client.query(` UPDATE Cars SET 
    name = '${name}',  model = '${model}', image ='${image}',  description = '${description}', number ='${number}', type ='${type}', 
    color = '${color}',price ='${price}',store_id='${store_id}'
    WHERE id = ${id} RETURNING *`);
    res.send(result.rows);
}

async function deleteCars(req, res) {
    const  id  = req.params.id; // Assuming id is passed as a parameter in the URL

    // Delete the store from the database based on the provided id
    const result = await client.query(` DELETE FROM Cars WHERE id = ${id} RETURNING *`);  
    res.send(result.rows);
}

module.exports = {
    getCars,
    addCars,
    updateCars,
    deleteCars,
};