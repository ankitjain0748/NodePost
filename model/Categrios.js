const pool = require("../config/db");


exports.Categries = async () => {
    const result = await pool.query('SELECT * FROM categories');
    return result.rows;
};

exports.AddCategories = async (categories, description, slug) => {
    console.log("Creating post with data:", { categories, description, slug });
    const result = await pool.query(
        `INSERT INTO categories (categories, description, slug) VALUES  RETURNING *`,
        [categories, description, slug]
    );

    console.log("Inserted:", result.rows[0]);
    return result.rows[0];
};

exports.getBycategories = async (id) => {
    const result = await pool.query(`SELECT * FROM categories WHERE id =${id}`, [id]);
    return result.rows[0];
};

exports.updateCategories = async (id, categories, description, slug) => {
    const result = await pool.query(
        `UPDATE categories SET VALUES WHERE id = ${id} RETURNING *`,
        [categories, description, slug, id]
    );
    return result.rows[0];
};

// Delete post
exports.deleteCategories = async (id) => {
    const result = await pool.query(
        'DELETE FROM categories WHERE id = $1 RETURNING *',
        [id]
    );
    return result.rows[0];
};
