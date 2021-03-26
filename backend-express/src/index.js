const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const port = process.PORT || 4000;

app.use(cors());
app.use(morgan("dev"));

app.get("/", (_, res) => res.json({ response: "Hello, world!" }));

app.listen(port, () => {
  console.log("server on port", port);
});
