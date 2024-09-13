import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AtalhosIluminacao from "./pages/AtalhosIluminacao";
import AtalhosProjecao from "./pages/AtalhosProjecao";
import Home from "./pages/Home";
import ListaDeCoresParaLouvor from "./pages/ListaDeCoresParaLouvor";
import SetlistLouvor from "./pages/SetlistLouvor";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header titulo="Midia Taquara"/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/atalhos-iluminacao" element={<AtalhosIluminacao />}></Route>
          <Route path="/atalhos-projecao" element={<AtalhosProjecao />}></Route>
          <Route path="/lista-de-cores-para-louvor" element={<ListaDeCoresParaLouvor />}></Route>
          <Route path="/setlist-louvor" element={<SetlistLouvor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
