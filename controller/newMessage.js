const { addMessage } = require("../models/messages.js")

function get(req, res) {
  res.render("form")
}

function post(req, res) {
  const { name, message } = req.body
  addMessage({ user: name, text: message })
  res.redirect("/")
}

const newMessageControllers = { get, post }

module.exports = newMessageControllers
