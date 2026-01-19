import { Link } from "react-router-dom";
import Header from "../components/Header";
import logo from "../assets/logo-icon.svg";

function Home() {
  return (
    <>
      <Header />

      <main className="hero">
        <img src={logo} alt="Dermacheck" className="hero-logo" />

        <span className="badge">Transparencia científica</span>
        <h1>Descubre qué hay en tus productos</h1>
        <p>Analiza ingredientes cosméticos con información clara.</p>

        <Link to="/skin" className="btn-primary">
          Comenzar análisis
        </Link>
      </main>
    </>
  );
}

export default Home;



