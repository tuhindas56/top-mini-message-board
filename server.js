const express = require("express")
const path = require("path")
const homeController = require("./controller/home.js")
const newMessageRouter = require("./routes/new.js")
const { handle404, handleError } = require("./controller/errorHandler.js")

const app = express()
const PORT = process.env.PORT || 8080

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded())

app.get("/", homeController)
app.use("/new", newMessageRouter)

app.use(handle404)
app.use(handleError)

app.listen(PORT, () => console.log(`[Server]: Listening on port ${PORT}`))
