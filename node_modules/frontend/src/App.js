import Dashboard from "./componnents/dashboar.componnents.js";
import CreateMech from "./componnents/mecha.conponnents.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateMech />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

