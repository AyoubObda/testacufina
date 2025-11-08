export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }
  const { name, email, message } = req.body || {};
  console.log("Nieuw contact:", { name, email, message });
  return res.status(200).json({ ok: true, message: "Bedankt! We nemen snel contact op." });
}
