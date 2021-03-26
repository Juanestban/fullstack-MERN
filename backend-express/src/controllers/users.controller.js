class UsersController {
  constructor() {
    console.log("initializer project - UsersController")
  }

  getUsers = (_, res) => {
    res.json({ user: "Juan Esteban Echeverry Perdomo" })
  }
}

const usersController = new UsersController()

module.exports = usersController
