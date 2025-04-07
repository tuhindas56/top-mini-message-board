const formatDate = require("../utils/dateFormatter.js")

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: formatDate(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: formatDate(new Date()),
  },
]

function getMessages() {
  return [...messages]
}

function addMessage(message) {
  const added = formatDate(new Date())
  messages.push({ ...message, added })
  return [...messages]
}

module.exports = { addMessage, getMessages }
