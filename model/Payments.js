const pool = require("../config/db");

exports.payentgetall = async () => {
    const Payment = await pool.query("SELECT * FROM payments");
    return Payment.rows;
}


exports.paymentAdd = async (user_id, order_id, transaction_id, order_count, amount,) => {
    const payment = await pool.query("INSERT INTO payments  (user_id,  order_id, transaction_id, order_count , amount) VALUES  RETURNING * ", [
        user_id, order_id, transaction_id, order_count, amount
    ])
    return payment.rows[0];
}

exports.PaymentGetById = async (id) => {
    const result = await pool.query(`SELECT * FROM payments WHERE id =${id}`, id);
    return result.rows[0];
}