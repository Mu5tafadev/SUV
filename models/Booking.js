// const client = require("../db")


// async function getBooking(req, res) {
//     const result = await client.query(`select * from Booking`)
//     res.send(result.rows);
// }


// async function addBooking(req, res) {
//     let { car_type,name,phone,status } = req.body;
//     const result = await client.query(`insert into Booking (car_type,name,phone,status)
//     values ('${car_type}','${name}','${phone}','${status}') RETURNING *`);
//     res.send(result.rows);
// }

// /////


// async function updateBooking(req, res) {
//     const { id } = req.params; // Assuming id is passed as a parameter in the URL
//     const { car_type, name, phone, status } = req.body;
    
//     // Update the store in the database based on the provided id
//     const result = await client.query(` UPDATE Booking SET 
//     car_type = '${car_type}',  name = '${name}',  phone = '${phone}',  status = '${status}'
//     WHERE id = ${id} RETURNING *`);
//     res.send(result.rows);
// }

// async function deleteBooking(req, res) {
//     const { id } = req.params; // Assuming id is passed as a parameter in the URL
    
//     // Delete the store from the database based on the provided id
//     const result = await client.query(` DELETE FROM Booking WHERE id = ${id} RETURNING *`);  
//     res.send(result.rows);
// }

// module.exports = {
//     getBooking,
//     addBooking,
//     updateBooking,
//     deleteBooking,
// };