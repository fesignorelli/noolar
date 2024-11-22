import React, { useRef } from "react";
import AreaDaLeitura from "./Inicio";
import BoxLivros from "./Categorias";
import Livros from "./Livros";

// Definindo as categorias e livros com título, autor, imagem e descrição
const categorias = [
  {
    nome: "Português",
    descricaoCategoria: (
      <>
        Aprimore sua <span className="highlight">Compreensão</span> da língua,{" "}
        <span className="highlight">amplie</span> seu vocabulário e{" "}
        <span className="highlight">escreva</span> de forma mais clara e
        precisa!
      </>
    ),

    livros: [
      {
        titulo: "Livro A",
        autor: "Autor A",
        image: "../public/images/books/portugues/1.png",

        desc: "Capa do livro",
      },
      {
        titulo: "Livro B",
        autor: "Autor B",
        image: "../public/images/books/portugues/2.png",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro C",
        autor: "Autor C",
        image: "../public/images/books/portugues/3.png",

        desc: "Capa do livro",
      },
      {
        titulo: "Livro A",
        autor: "Autor A",
        image: "../public/images/books/portugues/4.png",

        desc: "Capa do livro",
      },
      {
        titulo: "Livro B",
        autor: "Autor B",
        image: "../public/images/books/portugues/5.png",

        desc: "Capa do livro",
      },
      {
        titulo: "Livro C",
        autor: "Autor C",
        image: "../public/images/books/portugues/6.png",

        desc: "Capa do livro",
      },
      {
        titulo: "Livro A",
        autor: "Autor A",
        image: "../public/images/books/portugues/7.png",

        desc: "Capa do livro",
      },
      {
        titulo: "Livro B",
        autor: "Autor B",
        image: "../public/images/books/portugues/8.png",

        desc: "Capa do livro",
      },
      {
        titulo: "Livro C",
        autor: "Autor C",
        image: "../public/images/books/portugues/9.png",

        desc: "Capa do livro",
      },
    ],
  },
  {
    nome: "Educativos",
    descricaoCategoria: (
      <>
        O gênero Educativo engloba todos os textos que têm como objetivo
        principal<span className="highlight"> ensinar </span> da língua,{" "}
        <span className="highlight"> informar </span> e
        <span className="highlight"> esclarecer </span> sobre determinado
        assunto precisa!
      </>
    ),
    livros: [
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
    ],
  },
  {
    nome: "Clássicos",
    descricaoCategoria: (
      <>
        Os gêneros <span className="highlight"> lírico,</span>
        <span className="highlight"> épico </span> e{" "}
        <span className="highlight"> dramático</span>, definidos por
        Aristóteles, são a base da classificação literária e moldam a tradição
        literária ocidental.
      </>
    ),
    livros: [
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
    ],
  },
  {
    nome: "Culinária",
    descricaoCategoria: (
      <>
        <span className="highlight"> Receitas </span> e{" "}
        <span className="highlight"> cultura </span> gastronômica, com o
        objetivo de ensinar, inspirar e orientar sobre o preparo de alimentos e
        práticas na cozinha!
      </>
    ),
    livros: [
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
    ],
  },
  {
    nome: "Técnicos",
    descricaoCategoria: (
      <>
        Livros focados em transmitir{" "}
        <span className="highlight">conhecimentos</span> especializados e{" "}
        <span className="highlight"> práticos</span>, abrangendo áreas como
        ciência, tecnologia, engenharia e matemática
      </>
    ),
    livros: [
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro D",
        autor: "Autor D",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro E",
        autor: "Autor E",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
      {
        titulo: "Livro F",
        autor: "Autor F",
        image:
          "https://marketplace.canva.com/EAF0stqfV5w/1/0/1003w/canva-capa-de-livro-trabalho-escolar-vintage-bege-marrom-e-branco-Pg1zXYd1MTA.jpg",
        desc: "Capa do livro",
      },
    ],
  },
];

function AreaDaLeitura() {
  // Referências para cada lista de livros nas categorias
  const livrosRefs = useRef([]);

  // Função para capturar o início do clique e configurar o scroll manual (drag)
  const handleMouseDown = (e, index) => {
    const currentRef = livrosRefs.current[index];
    if (!currentRef) return;

    const startX = e.pageX - currentRef.offsetLeft;
    const scrollLeft = currentRef.scrollLeft;

    // Função para mover a lista de livros horizontalmente
    const handleMouseMove = (e) => {
      const x = e.pageX - currentRef.offsetLeft;
      const walk = (x - startX) * 2;
      currentRef.scrollLeft = scrollLeft - walk;
    };

    // Função para encerrar o movimento ao soltar o mouse
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Adicionando eventos de movimento e liberação do mouse
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="page">
      {/* Componente de cabeçalho com título e subtítulo */}
      <AreaDaLeitura
        titulo="Área da Leitura"
        subtitulo={
          <>
            Consuma conteúdos <span className="highlight">educativos,</span>{" "}
            <span className="highlight">culturais</span> e{" "}
            <span className="highlight">agregadores!</span>
          </>
        }
      />

      {/* Área dos cards que exibem as categorias de livros */}
      <div className="cardsArea">
        {categorias.map((categoria, cardIndex) => (
          <div className="card" key={cardIndex}>
            {/* Componente BoxLivros que exibe a categoria e texto */}
            <BoxLivros
              categoria={categoria.nome}
              textoCard={categoria.descricaoCategoria}
            />

            {/* Lista de livros que podem ser movidos com arraste */}
            <div
              className="livros"
              ref={(el) => (livrosRefs.current[cardIndex] = el)}
              onMouseDown={(e) => handleMouseDown(e, cardIndex)}
            >
              {categoria.livros.map((livro, index) => (
                <Livros key={index} {...livro} />
              ))}
            </div>
          </div>
        ))}
        
      </div>

    </div>
  );
}

export default AreaDaLeitura;
