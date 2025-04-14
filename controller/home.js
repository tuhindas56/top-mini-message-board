const { getMessages } = require("../models/messages.js")

async function homeController(req, res) {
  const messages = await getMessages()
  res.render("index", { messages: !messages.length ? undefined : messages })
}
module.exports = homeController
