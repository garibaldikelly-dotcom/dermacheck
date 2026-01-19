const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());

/* RUTA DE PRUEBA */
app.get("/", (req, res) => {
  res.send("Servidor Dermacheck funcionando 🚀");
});

/* BASE DE DATOS SIMULADA */
const ingredientesDB = {
  "niacinamida": {
    beneficio: "Fortalece la barrera cutánea.",
    advertencia: "Bien tolerada.",
    riesgo: "Enrojecimiento leve."
  },
  "retinol": {
    beneficio: "Reduce arrugas.",
    advertencia: "Uso nocturno.",
    riesgo: "Irritación."
  },
  "ácido hialurónico": {
    beneficio: "Hidrata profundamente.",
    advertencia: "Aplicar en piel húmeda.",
    riesgo: "Muy seguro."
  }
};

/* RUTA POST */
app.post("/analyze", (req, res) => {
  const ingredientes = req.body.ingredientes;

  if (!ingredientes) {
    return res.status(400).json({ error: "No se recibieron ingredientes" });
  }

  const resultados = ingredientes.map(nombre => ({
    nombre,
    info: ingredientesDB[nombre] || null
  }));

  res.json(resultados);
});

/* INICIAR SERVIDOR */
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
