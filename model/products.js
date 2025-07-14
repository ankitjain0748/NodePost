const pool = require("../config/db");

exports.prodcutsget = async () => {
    const result = await pool.query("SELECT * FROM product");
    return result.rows;
}


exports.ProductAdd = async (name, description, price, stock) => {
    const result = await pool.query("INSERT INTO product (name , descrption , price ,image, stock) VALUES RETURNING * ", [
        name, description, price, stock
    ])
    return result.rows[0];
}

exports.ProductGetByID = async (id) => {
    const result = await pool.query(`SELECT FROM prodcts WHERE id = ${id}`, [id]);
    return result.rows[0];
}

exports.ProductGetUpdate = async (id, name, description, price, stock) => {
    const result = await pool.query(`UPDATE products SET VALUES  WHERE id = ${id} RETURNING * `, [
        id, name, price, description, stock
    ])
    return result.rows[0];
};


exports.deleteproduct = async (id) => {
    const result = await pool.query(`DELETE FROM categories WHERE id = $1 RETURNING * `,
        [id
        ])
    return result.rows[0];
}