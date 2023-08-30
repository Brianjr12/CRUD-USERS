import {pool} from '../db.js';


export const userGet = async (req, res) => {
 try {
   const [result] = await pool.query('SELECT * FROM users');
   res.json(result)
 } catch (error) {
  console.log(error);
 }
}

export const userSend = async (req, res) => {
  try {
    const {name , email, phone} = req.body;
    const result = await pool.query('INSERT INTO users (user_name, user_email, user_phone) VALUES (?,?,?)', [name, email, phone]);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

export const userUpdate = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

export const userDelete = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

