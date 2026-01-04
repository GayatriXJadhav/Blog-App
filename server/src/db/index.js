const {Pool} =require('pg');
const dotenv = require('dotenv');

dotenv.config();


// “A connection pool maintains reusable database connections so the application can handle multiple requests efficiently without opening and closing connections repeatedly.”
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports=pool;