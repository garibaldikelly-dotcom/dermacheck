import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skin from "./pages/Skin";
import Analyze from "./pages/Analyze";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/analyze" element={<Analyze />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
