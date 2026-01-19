import { useNavigate } from "react-router-dom";

function SkinSelector() {
  const navigate = useNavigate();

  const seleccionarPiel = (tipo) => {
    // (Más adelante puedes guardar el tipo de piel)
    navigate("/analyze");
  };

  return (
    <div className="container">
      <h2>Selecciona tu tipo de piel</h2>

      <div className="skin-grid">
        <div
          className="skin-card"
          onClick={() => seleccionarPiel("normal")}
        >
          😊
          <span>Normal</span>
        </div>

        <div
          className="skin-card"
          onClick={() => seleccionarPiel("sensible")}
        >
          🛡️
          <span>Sensible</span>
        </div>

        <div
          className="skin-card"
          onClick={() => seleccionarPiel("grasa")}
        >
          ✨
          <span>Grasa</span>
        </div>

        <div
          className="skin-card"
          onClick={() => seleccionarPiel("seca")}
        >
          🌵
          <span>Seca</span>
        </div>
      </div>
    </div>
  );
}

export default SkinSelector;
