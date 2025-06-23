const  pool  = require("../config/db");


exports.OrderGetAll  = async()=>{
const result =  await  pool.query("SELECT * FROM orders");
return result.rows;
}

exports.OrderPost  = async(user_id, total_amount , status)=>{}