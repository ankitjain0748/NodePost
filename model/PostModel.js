const pool = require("../config/db");

// Get all posts
exports.postAll = async () => {
    const result = await pool.query('SELECT * FROM posts');
    return result.rows;
};

// Get post by ID
exports.getByPost = async (id) => {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    return result.rows[0];
};

// Create new post
exports.createPost = async (title, description, post_image, view, user_id) => {
    console.log("Creating post with data:", { title, description, post_image, view, user_id });
   const result = await pool.query(
"INSERT INTO posts (title, description, post_image, view, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
[title, description, post_image, view, user_id]
);

console.log("Inserted:", result.rows[0]);
return result.rows[0];
};

// Update post
exports.updatePost = async (id, title, description, post_image, view) => {
    const result = await pool.query(
        'UPDATE posts SET title = $1, description = $2, post_image = $3, view = $4 WHERE id = $5 RETURNING *',
        [title, description, post_image, view, id]
    );
    return result.rows[0];
};

// Delete post
exports.deletePost = async (id) => {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};