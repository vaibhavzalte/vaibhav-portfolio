import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "todo-data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      res.status(200).json(JSON.parse(data));
    } catch (err) {
      res.status(500).json({ error: "Failed to read file" });
    }
  } 
  else if (req.method === "POST") {
    try {
      fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to write file" });
    }
  } 
  else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
