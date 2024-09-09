const { sql } = require("@vercel/postgres");
const bcrypt = require("bcrypt");

const saltRounds = 10;

async function registerDepartment(req, res) {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const newDepartment =
      await sql`INSERT INTO departments (name, email, password) VALUES (${name}, ${email}, ${hashedPassword}) RETURNING *`;

    res.json(newDepartment.rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = registerDepartment;
