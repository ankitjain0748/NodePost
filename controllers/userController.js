const UserModel = require('../model/userModel');

exports.addUser = async (req, res) => {
  try {
    const { name, email, password, phone ,  roles } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, Email, and Password required' });
    }
    const user = await UserModel.createUser(name, email, password, phone ,roles || null);
    res.status(201).json(user);
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Fetch Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await UserModel.getUserById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    console.error('Get by ID Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getUserupdateById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, email, password, phone } = req.body;
    const user = await UserModel.updateUser(id, name, email, password, phone);
    if (!user) return res.status(404).json({ error: 'User not found or not updated' });
    res.json(user);
  } catch (error) {
    console.error('Get by ID Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await UserModel.deleteUser(id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};