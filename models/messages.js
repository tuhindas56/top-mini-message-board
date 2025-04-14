const db = require("../db/index.js")
const formatDate = require("../utils/dateFormatter.js")

async function getMessages() {
  const { rows } = await db.query(
    "SELECT username as user, TO_CHAR(added, 'Mon dd, yyyy') as added, message as text FROM messages;"
  )
  return rows
}

async function addMessage({ user, text }) {
  const added = formatDate(new Date())
  await db.query(
    "INSERT INTO messages (username, added, message) values ($1, $2, $3);",
    [user, added, text]
  )
}

module.exports = { addMessage, getMessages }
