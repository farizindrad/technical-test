import Array from "./component/Array";
import Anagram from "./component/Anagrams";
import Formulir from "./component/Formulir";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./component/Data";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/anagram" element={<Anagram />}></Route>
        <Route path="/array" element={<Array />}></Route>
        <Route path="/form" element={<Formulir />}></Route>
        <Route path="/data" element={<Data />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
