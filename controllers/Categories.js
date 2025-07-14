const CategriosModel = require('../model/Categories');

exports.addCategories = async (req, res) => {
    try {
        const { categories, description } = req.body;
        const slug = categories.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
        if (!categories || !description || !slug) {
            return res.status(400).json({ error: 'Name, Email, and Password required' });
        }
        const categoriesdata = await CategriosModel(categories, description, slug);
        res.status(201).json(categoriesdata);
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getCategoriess = async (req, res) => {
    try {
        const categories = await CategriosModel.Categries();
        res.json({
            categories: categories,
            status: true,
            message: "categories Get All "
        }
        );
    } catch (error) {
        console.error('Fetch Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get user by ID
exports.getCategoriesById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = await UserModel.getUserById(id);
        if (!user) return res.status(404).json({ error: 'Categrios not found' });
        res.json(user);
    } catch (error) {
        console.error('Get by ID Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getCategoriesupdateById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { categories, description } = req.body;
        const slug = categories.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

        const user = await CategriosModel.updateCategories(id, categories, description, slug);
        if (!user) return res.status(404).json({ error: 'Categrios not found or not updated' });
        res.json(user);
    } catch (error) {
        console.error('Get by ID Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete user
exports.deleteCategories = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deleted = await CategriosModel.deleteCategories(id);
        if (!deleted) return res.status(404).json({ error: 'Categrios not found' });
        res.json({ message: 'Categrios deleted successfully' });
    } catch (error) {
        console.error('Delete Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};