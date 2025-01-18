import Dashboard from "./componnents/dashboar.componnents.js";
import CreateMech from "./componnents/mecha.conponnents.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateMech from "./componnents/update.componnent.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateMech />} />
          <Route path="/update" element={<UpdateMech /> } />
          {/* comment: cuando le da click al boton de update es donde se le pasa la ruta de get-mech/:id porque ahi es donde obtendremos la imformacion de 
          un solo mecha que estemos seleccionando para poder actualizarlo. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

