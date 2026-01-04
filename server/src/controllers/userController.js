const pool=require('../db/index');
//create new user
const createUser=async(req, res)=>{
    const {name, email, password}=req.body;
    try{
        const result=await pool.query(

            'Insert into users(name,email,password) values ($1,$2,$3) Returning *',[name,email,password]
        );
        res.status(201).json(result.rows[0]);

    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};
//get all users from db 
const getAllUsers=async(req,res)=>{
    try{
        const result=await pool.query('select * from users');
        res.json(result.rows);

    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};
module.exports={getAllUsers,createUser};