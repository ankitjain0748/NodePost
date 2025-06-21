const productModel = require("../model/products");

exports.productadd = async(req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const record = await productModel.ProductAdd({ name, description, price, stock });
        return res.json({
            record: record,
            msg: " prodcut Add ",
            status: true
        })
    } catch (error) {
        res.json({
            error: error,
            msg: "product get ",
            status: false
        })
    }
};
exports.prodcutGetAll = async (req, res) => {
    try {
        const prodctsGet = await productModel.prodcutsget({});
        res.json({
            product: prodctsGet,
            msg: "Prodcut Get All",
            status: true
        })
    } catch (error) {
        res.json({
            error: error,
            msg: "product get",
            status: false
        })
    }
}

exports.ProductUpdateAll = async (req, res) => {
    try {
        const { id, name, description, price, stock } = req.body;
        const record = await productModel.ProductGetUpdate({ id, name, description, price, stock })
        res.json({
            record: record,
            msg: "product Update",
            status: true
        })
    } catch (error) {
        res.json({
            error: error,
            msg: "product Not update  ",
            status: false

        })
    }
}
exports.productdelete = async (req, res) => {
    try {
        const id = req.params.id ;
        const record = await productModel.productdelete({ id });
        res.json({
            record: record,
            msg: "prodcut Delete ",
            status: true
        })
    } catch (error) {
        res.json({
            error: error,
            msg: "Delete Product",
            status: false
        })
    }
}