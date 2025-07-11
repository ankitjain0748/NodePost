const pool = require("../config/db");


exports.reviews = async () => {
    const result = await pool.query("SELECT * FROM reviews");
    return result.rows;
}

exports.reviewsAdd = async (user_id, title, descrption, rating, status) => {
    const result = await pool.query("INSERT INTO reviews (user_id,  title , descrption, rating , status) VALUES RETURNING *", [
        user_id, title, descrption, rating, status
    ])
    return result.rows[0];
}

exports.reviewsGetAll = async (id) => {
    const result = await pool.query(`SELECT * FROM reviwes where id =${id}`, id);
    return result.rows[0];
}

exports.reviewsUpdateAll = async (id, title, descrption, rating, status) => {
    const result = await pool.query(`UPDATE reviews  SET VALUES WHERE id = ${id} RETURNING *`, [
        title, descrption, rating, status
    ])
    return result.rows[0];
}

exports.reviewsdeleteAll = async (id) => {
    const result = await pool.query(`DELETE * FROM reviews WHERE id = ${id} RETURNING * `, [
        id
    ]);
    return result.rows[0];
}