const client = require("../db")


async function getStores(req, res) {
    const result = await client.query(`select * from stores`)
    res.send(result.rows);
}


async function addStores(req, res) {
    let { description,title,phone,cover ,logo,lat,lang} = req.body;
    const result = await client.query(`insert into stores (description,title,phone,cover,logo,lat,lang)
    values ('${description}','${title}','${phone}','${cover}','${logo}','${lat}','${lang}') RETURNING *`);
    res.send(result.rows);
}

/////


async function updateStores(req, res) {
    const { id } = req.params; // Assuming id is passed as a parameter in the URL
    const { description, title, phone, cover ,logo,lat,lang} = req.body;
    
    // Update the store in the database based on the provided id
    const result = await client.query(` UPDATE stores SET 
    description = '${description}',  title = '${title}',  phone = '${phone}',  cover = '${cover}',logo = '${logo}',lat = '${lat}',lang ='${lang}'
    WHERE id = ${id} RETURNING *`);
    res.send(result.rows);
}

async function deleteStores(req, res) {
    const { id } = req.params; // Assuming id is passed as a parameter in the URL
    
    // Delete the store from the database based on the provided id
    const result = await client.query(` DELETE FROM stores WHERE id = ${id} RETURNING *`);  
    res.send(result.rows);
}

module.exports = {
    getStores,
    addStores,
   updateStores,
    deleteStores,
};

//getStudent()
//addStudent("mustafa", "7th")