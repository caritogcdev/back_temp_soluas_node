const { jsonResponse } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", (req, res) => {
  //res.send("signup");
  const { name, username, password } = req.body;

  if (!!!name || !!!username || !!!password) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "Los campos son requeridos",
      })
    );
  }

  // Crear usuario en la DB

  res
    .status(200)
    .json(jsonResponse(200, { message: "El usuario fue creado correctamente" }));

  res.send("signout");
});

module.exports = router;
