import express from "express"
import path from "node:path"

const app = express()
const PORT = process.env.PORT || 8080

app.set("views", path.join(import.meta.dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(path.join(import.meta.dirname, "public")))

app.listen(PORT, () => console.log(`[Server]: Listening on port ${PORT}`))
