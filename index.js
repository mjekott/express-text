const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  res.cookie("X-AUTH-TOKEN", "hellosfjsfsiff", {
    sameSite: "none",
    path: "/*",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res.send("success");
});

app.get("/api/hello", (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  return res.send("success");
});

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log("app running");
});
