const { Router } = require("express")
const newMessageControllers = require("../controller/newMessage.js")

const newMessageRouter = Router()

newMessageRouter.get("/", newMessageControllers.get)
newMessageRouter.post("/", newMessageControllers.post)

module.exports = newMessageRouter
