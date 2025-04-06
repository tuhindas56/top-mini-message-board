import { Router } from "express"
import newMessageControllers from "../controller/newMessage.js"

const newMessageRouter = Router()

newMessageRouter.get("/", newMessageControllers.get)
newMessageRouter.post("/", newMessageControllers.post)

export default newMessageRouter
