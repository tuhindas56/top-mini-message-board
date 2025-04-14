const { getMessages } = require("../models/messages.js")

async function homeController(req, res) {
  const messages = await getMessages()
  res.render("index", { messages })
}

module.exports = homeController
