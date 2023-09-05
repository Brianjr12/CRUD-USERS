import { pool } from "../db.js";

export const userGet = async (req, res) => {
  try {
    const [usersRows] = await pool.query("SELECT * FROM users");
    res.render("users", { users: usersRows });
    console.log(usersRows);
  } catch (error) {
    console.log(error);
  }
};

export const userSend = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const result = await pool.query(
      "INSERT INTO users (user_name, user_email, user_phone) VALUES (?,?,?)",
      [name, email, phone]
    );
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const userUpdate = async (req, res) => {
  try {
  } catch (error) {}
};

export const userDelete = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await pool.query("DELETE FROM users WHERE user_id= ?", [id]);
    res.json(result)
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
