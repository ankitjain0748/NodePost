const pool = require('../config/db');

// Get all users
exports.getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};


exports.createUser = async (name, email, password, phone) => {
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, password, phone]
    );
    return result.rows[0];
  } catch (err) {
    console.error('DB Error:', err);
    throw err;
  }
};

// Get user by ID
exports.getUserById = async (id) => {
const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
return result.rows[0];
};

// Update user
exports.updateUser = async (id, name, email, password, phone) => {
const result = await pool.query(
'UPDATE users SET name = $1, email = $2, password = $3, phone = $4 WHERE id = $5 RETURNING *',
[name, email, password, phone, id]
);
return result.rows[0];
};

// Delete user
exports.deleteUser = async (id) => {
const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
return result.rows[0]; // null if not found
};