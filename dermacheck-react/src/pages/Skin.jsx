import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Skin() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main className="container">
        <h2>Selecciona tu tipo de piel</h2>

        <div className="skin-grid">
          <div className="skin-card" onClick={() => navigate("/analyze")}>
            😊 Normal
          </div>
          <div className="skin-card" onClick={() => navigate("/analyze")}>
            🛡️ Sensible
          </div>
          <div className="skin-card" onClick={() => navigate("/analyze")}>
            ✨ Grasa
          </div>
          <div className="skin-card" onClick={() => navigate("/analyze")}>
            🌵 Seca
          </div>
        </div>
      </main>
    </>
  );
}

export default Skin;

