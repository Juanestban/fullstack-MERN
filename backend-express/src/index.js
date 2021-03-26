const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 4000

// environment variables || config
app.set("port", port)

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.get("/", (_, res) => res.send("<h1>this is the app</h1>"))
app.use(require("./routers/users.routes"))

// server on PORT
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"))
})
