import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import bg from "./assets/images/bg.jpg";

function App() {
  return (
    <div
      className="h-screen  flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </div>
  );
}

export default App;
