import Header from "../components/Header";
import IngredientAnalyzer from "../components/IngredientAnalyzer";

function Analyze() {
  return (
    <>
      <Header />
      <main className="container">
        <IngredientAnalyzer />
      </main>
    </>
  );
}

export default Analyze;

