import express from "express"
import path from "node:path"
import homeController from "./controller/home.js"
import newMessageRouter from "./routers/new.js"

const app = express()
const PORT = process.env.PORT || 8080

app.set("views", path.join(import.meta.dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(import.meta.dirname, "public")))
app.use(express.urlencoded())

app.get("/", homeController)
app.use("/new", newMessageRouter)

app.listen(PORT, () => console.log(`[Server]: Listening on port ${PORT}`))
