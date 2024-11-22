import "./css/Inicio.css";

function AreaDaLeitura(props) {
  return (
    <>
    <header>
      <div className="bgImage">
        <img src="/images/bgOficial.png" alt="" />
      </div>
      <div className="box-title">
        <h1 className="titulo">Area da leitura</h1>
        <h2 className="subtitulo">
          Consuma contéudos <span className="highlight"> educativos</span> ,
          <span className="highlight"> culturais </span> e<span className="highlight"> agregadores</span>
        </h2>
      </div>
      <div className="imagem-container">
        <img
          className="estanteIMG"
          src="/images/EstanteDeLivro.png"
          alt="Descrição da Imagem"
        />
      </div>
      <div className="btnSeusLivros">
        <button>
          <span>Veja Seus Livros Aqui</span>
        </button>
      </div>
    </header>
    </>
  );
}

export default AreaDaLeitura;
