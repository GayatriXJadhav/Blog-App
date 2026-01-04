const express=require('express');
const cors=require('cors');
const dotenv = require('dotenv');
const morgan=require('morgan');
const pool = require('./db/index');


dotenv.config();


const app=express();

app.use(cors());
app.use(express());
app.use(morgan('dev'));





(async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ PostgreSQL connected');
  } catch (err) {
    console.error('❌ PostgreSQL error:', err.message);
  }
})();

app.get('/health', (req, res) => res.json({ status: 'OK' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));