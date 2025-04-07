const { getMessages } = require("../models/messages.js")

function homeController(req, res) {
  const messages = getMessages()
  res.render("index", { messages })
}

module.exports = homeController
