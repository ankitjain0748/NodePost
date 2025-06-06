const pool = require("../config/db");


exports.postAll =  async(()=>{
   return await ("SELECT * FROM Posts").rows;  
})

exports.getByPost =  async(id)=>{
    return await ("SELECT FROM Posts Where id = $1", [id]).rows[0]
};

exports.CreatePost = async(title, descrption, post_image, view )=>{
return await ("INSERT INTO Profiles  (title, descrption , post_image , view) value ($1, $2 , $3 , $4) RETURNING  *" , [
    title , descrption , post_image , view 
]).rows[0];
};

