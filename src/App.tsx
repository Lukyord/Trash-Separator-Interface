import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import BinCapacity from "./pages/BinCapacity";
import DataForEachUser from "./pages/DataForEachUser";
import Time from "./pages/Time";
import TotalTrash from "./pages/TotalTrash";

function App() {
  return (
    <div>
      <h1 className="bg-black text-white">Hello World!!!</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TotalTrash />} />
          <Route path="/time" element={<Time />} />
          <Route path="/data-for-each-user" element={<DataForEachUser />} />
          <Route path="/bin-capacity" element={<BinCapacity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
