import "./css/Inicio.css";

function AreaDaLeitura(props) {
  return (
    <>
    <header>
      <div className="bgImage">
        <img src="/images/bgOficial.png" alt="" />
      </div>
      <div className="box-title">
        <h1 className="titulo">Área de Lectura</h1>
        <h2 className="subtitulo">
          Consume contenidos <span className="highlight"> educativos</span> ,
          <span className="highlight"> culturales </span> y<span className="highlight"> enriquecedores</span>
        </h2>
      </div>
      <div className="imagem-container">
        <img
          className="estanteIMG"
          src="/images/EstanteDeLivro.png"
          alt="Descripción de la Imagen"
        />
      </div>
      <div className="btnSeusLivros">
      
      </div>
    </header>
    </>
  );
}

export default AreaDaLeitura;
