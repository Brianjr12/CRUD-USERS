import { pool } from "../db.js";

export const userGet = async (req, res) => {
  try {
    const [usersRows] = await pool.query("SELECT * FROM users_TB");
    res.render("users", { users: usersRows });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const userCreate = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    await pool.query(
      "INSERT INTO users_TB (user_name, user_email, user_phone) VALUES (?,?,?)",
      [name, email, phone]
    );
    res.redirect("/home");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const userGetUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const [usersRows] = await pool.query(
      "SELECT * FROM users_TB WHERE user_id = ?",
      [id]
    );
    res.render("users_edit", { users: usersRows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    await pool.query(
      "UPDATE users_TB SET user_name = ?, user_email = ?, user_phone = ? WHERE user_id = ?",
      [name, email, phone, id]
    );
    res.redirect("/home");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM users_TB WHERE user_id= ?", [id]);
    res.redirect("/home");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const about = (req, res) => {
  try {
    res.render("about")
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
