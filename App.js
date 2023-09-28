import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Home from "./components/Home";
import Update from "./components/Update";
import NavBar from "./components/NavBar";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="AddDetails" element={<Add />} />
          <Route path="Details/:id" element={<Details />} />
          <Route path="Update/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
