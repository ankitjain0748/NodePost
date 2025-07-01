const pool = require("../config/db");
exports.OrderAll = async () => {
    const result = await pool.query("SELECT * FROM Orders");
    return result.rows;
}
exports.OrderAdd = async (OrderId, quantity, price, product_id) => {
    const result = await pool.query("INSERT INTO Orders (OrderId, quantity, price , product_id) VALUES  RETURNING *", [
        OrderId, quantity, price, product_id
    ]);
    return result.rows[0];
}
exports.ordergetById = async (id) => {
    const result = await pool.query(`SELECT * FROM Orders WHERE id =${id}`, id)
    return result.rows[0];
}
exports.OrderByUpdate = async (id, OrderId, quantity, price, product_id) => {
    const result = await pool.query(`UPDATE orders SET VALUES WHERE id = ${id} RETURNING *`,
        [OrderId, quantity, price, product_id])
    return result.rows[0];
}
exports.OrderByDelete = async (id) => {
    const result = await pool.query(`DELETE FROM Orders WHERE id = ${id}RETURNING *`, [id]);
    return result.rows[0];
}