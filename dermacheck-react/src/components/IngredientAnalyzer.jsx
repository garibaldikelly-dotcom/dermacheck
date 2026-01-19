import { useState } from "react";

function IngredientAnalyzer() {
  const [input, setInput] = useState("");
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState("");

  const analizar = async () => {
    // 🔴 Validación
    if (!input.trim()) {
      setError("Por favor ingresa al menos un ingrediente.");
      setResultados([]);
      return;
    }

    setError(""); // limpia el error si todo va bien

    const lista = input
      .toLowerCase()
      .split(",")
      .map(i => i.trim())
      .filter(Boolean);

    const response = await fetch("http://localhost:4000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ingredientes: lista })
    });

    const data = await response.json();
    setResultados(data);
  };

  return (
    <div className="analyzer">
      <h2>Analiza tus ingredientes</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ejemplo: niacinamida, retinol, ácido hialurónico"
      />

      {/* 🔔 Mensaje de error */}
      {error && <p className="error">{error}</p>}

      <div className="btn-wrapper">
        <button onClick={analizar}>Analizar ingredientes</button>
      </div>

      <div className="results">
        {resultados.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.nombre}</h3>

            {item.info ? (
              <>
                <p className="verde">🟢 {item.info.beneficio}</p>
                <p className="amarillo">🟡 {item.info.advertencia}</p>
                <p className="rojo">🔴 {item.info.riesgo}</p>
              </>
            ) : (
              <p>⚠️ Sin evidencia científica suficiente</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientAnalyzer;

