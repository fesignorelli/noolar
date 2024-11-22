import React, { useRef } from "react";
import "./components/css/AreaDaLeitura.css";
import AreaDaLeitura from "./components/Inicio";
import BoxLivros from "./components/Categorias";
import Livros from "./components/Livros";
import Page from "./pagina";


const App = () => {
  return (
    <div className="page">
      <Page/>
    </div>
  );
};

export default App;