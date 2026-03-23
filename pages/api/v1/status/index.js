import database from "../../../../infra/database";

export default async function status(req, res) {
  try {
    const result = await database.query("SELECT 1 as sum;");
    res.status(200).json(result.rows);
  } catch (err) {
    console.log("ERRO REAL:", err); // 👈 ISSO
    res.status(500).json({ error: err.message });
  }
}
