const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", (req, res) => {
  //res.send("signup");
  const { username, password } = req.body;

  if (!!!username || !!!password) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "Los campos son requeridos",
      })
    );
  }

  // Autenticar usuario
  const accessToken = "access_token";
  const refreshToken = "refresh_token";
  //Esto se modifica ya cuando nos conectemos a la DB
  const user = {
    id: "1",
    name: "Caro",
    username: "CaroG",
  };

  res
    .status(200)
    .json(jsonResponse(200, { user, accessToken, refreshToken }));

});

module.exports = router;