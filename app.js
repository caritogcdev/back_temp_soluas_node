const express = require('express');
const cors = require('cors'); // para habilitar la comunicación entre ambos dominios..
const app = express();


require('dotenv').config();

const port = process.env.PORT || 8000;


// Configuaración de cors y configuaración de las rutas
app.use(cors());
app.use(express.json());

app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/user", require("./routes/user"));
app.use("/api/todos", require("./routes/todos"));
app.use("/api/refresh-token", require("./routes/refreshToken"));
app.use("/api/signout", require("./routes/signout"));


app.get("/", (req, res) => {
    res.send(`Hi!`)
});

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
});

