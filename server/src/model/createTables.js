const pool= require('../db/index');
const createTables=async()=>{
    try{
        await pool.query(`
             CREATE TABLE IF NOT EXISTS users(
             id serial primary key,
             name varchar(100) not null,
             email varchar(100) unique not null,
             password varchar(255) not null,
             created_at timestamp default current_timestamp
             );
             

             create table if not exists posts(
             id serial primary key,
             user_id int references users(id),
             title varchar(255) not null,
             content text not null,
             created_at timestamp default current_timestamp,
             updated_at timestamp default current_timestamp
            );
        `);
        console.log("Tables created successfully");
    
     
    }
    catch(err){
        console.log("error creating tables",err.message);

    }
    finally{
        pool.end();
    }
};
createTables();