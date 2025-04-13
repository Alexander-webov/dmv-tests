import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import bg from "./assets/images/bg.jpg";
import Result from "./pages/Result";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div
      className="h-screen  flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
