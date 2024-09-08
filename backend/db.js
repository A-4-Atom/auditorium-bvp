const { sql } = require("@vercel/postgres");

async function handler(req, res) {
  try {
    const result = await sql`SELECT * FROM invoices`;
    res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = handler;
