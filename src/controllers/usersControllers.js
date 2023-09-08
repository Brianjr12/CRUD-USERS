import { pool } from "../db.js";

export const userGet = async (req, res) => {
  try {
    const [usersRows] = await pool.query("SELECT * FROM users");
    res.render("users", { users: usersRows });
  } catch (error) {
    console.log(error);
  }
};

export const userCreate = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
     await pool.query(
      "INSERT INTO users (user_name, user_email, user_phone) VALUES (?,?,?)",
      [name, email, phone]
    );
    res.redirect("/")
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
    await pool.query("DELETE FROM users WHERE user_id= ?", [id]);
    res.redirect("/")
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
