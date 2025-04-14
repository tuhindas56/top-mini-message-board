const db = require("../db/index.js")

async function getMessages() {
  const { rows } = await db.query(
    "SELECT username as user, TO_CHAR(added, 'Mon dd, yyyy') as added, message as text FROM messages;"
  )
  return rows
}

function addMessage(message) {
  const added = formatDate(new Date())
  messages.push({ ...message, added })
  return [...messages]
}

module.exports = { addMessage, getMessages }
