const Post = require("../model/PostModel");


exports.postcreate = async (req, res) => {
    try {
        console.log("REQ BODY:", req.body);
        const { title, description, post_image,  view , user_id } = req.body;
        const result = await Post.createPost(title, description, post_image, view, user_id);
        console.log("result", result);
        res.json({
            status: 'success',
            data: result
        });

    } catch (error) {
        console.log("error", error);
    }
}

exports.postgetAll = async (req, res) => {
    try {
        const result = await Post.postgetAll();
        res.json({
            status: 'success',
            data: result
        });
    } catch (error) {

    }
}

exports.postgetId = async (req, res) => {
    try {
        const { id } = req.body;
        const result = await Post.postgetId(id);
        res.json({
            result: result
        })
    } catch (error) {

    }
}

exports.updatepost =  async(req,res)=>{
    const{id, title ,  description,  view }= req.body;
    try {
        const result =  await Post.updatePost(id, title, description , view)
        
    } catch (error) {
        console.log(error)
    }
}