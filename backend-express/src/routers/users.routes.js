const { Router } = require("express")
const router = Router()

const usersController = require("../controllers/users.controller")

router.get("/api", (_, res) => {
  res.json({ res: "this the api" })
})

router.get("/api/users", usersController.getUsers)

module.exports = router
