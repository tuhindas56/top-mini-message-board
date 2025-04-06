import { getMessages } from "../models/messages.js"

export default function homeController(req, res) {
  const messages = getMessages()
  res.render("index", { messages })
}
