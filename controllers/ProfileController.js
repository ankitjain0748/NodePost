const Profile  = require('../model/ProfileModel');


exports.ProfileCreate =  async (req,res)=>{
    try {
        const{name, age, wp, profile}=  req.body;
        const  result   =  await  Profile.ProfileCreate(name,  wp, profile, age);
        res.json({
            status: 'success',
            data: result
        });
    } catch (error) {
        console.log('Server Error:', error);
    }
}

exports.postGetAll =  async (req,res)=>{
    try{
        const  Ressult  =  await Profile.profileget();
        res.json({
            status: 'success',
            data: Ressult
        })
    }catch(error){
        console.log('Server Error:', error);
    }
}

exports.porofileGetById = async (req, res) => {
    try {
        
        const id = parseInt(req.params.id);
        const result = await Profile.profilegetbyid(id);
        if (!result) return res.status(404).json({ error: 'Profile not found' });
        res.json({
            status: 'success',
            data: result
        });
    } catch (error) {
        console.log('Server Error:', error);
    }
}


