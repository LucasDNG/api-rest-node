import express from "express";
import notFound from "./src/middlewares/not-found.js";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  // res.json({message: 'Hola middleWare'})
  console.log(req.method);
  next();
});

app.use(notFound)

app.get("/", (req, res) => {
  res.json({ message: "Hola middleWare", hola: "Saludo" });
});

app.listen(port, () => {
  console.log(`Escuchando puerto ${port}`);
});
