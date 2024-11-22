import React, { useRef } from "react";
import "./components/css/AreaDaLeitura.css";
import AreaDaLeitura from "./components/Inicio";
import BoxLivros from "./components/Categorias";
import Livros from "./components/Livros";
// Definindo as categorias e livros com título, autor, imagem e descrição
const categorias = [
  {
    nome: "Literatura Brasileira",
    textcard: (
      <>
        Aprimore sua <span className="highlight">Compreensão</span> da língua,{" "}
        <span className="highlight">amplie</span> seu vocabulário e{" "}
        <span className="highlight">escreva</span> de forma mais clara e
        precisa!
      </>
    ),
    livros: [
      {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        image:
          "/DomCasmurroCapa.jpg",
        desc: "Capa do livro",
        pdf: "/domCasmurro.pdf"

      },

      {
        titulo: "Iracema",
        autor: "José de Alencar",
        image:
          "https://m.media-amazon.com/images/I/71LCDi6E2oL._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
      },

      {
        titulo: "O Ateneu",
        autor: "Raul Pompeia",
        image:
          "https://m.media-amazon.com/images/I/A17Rzp18iXL._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
      },

      {
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        image: "https://m.media-amazon.com/images/I/81m1emiSp-S.jpg",
        desc: "Capa do livro",
      },

      {
        titulo: "A Escrava Isaura",
        autor: "Bernardo Guimarães",
        image:
          "https://m.media-amazon.com/images/I/61Bz-Qtxn4L._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
      },

      {
        titulo: "Quincas Borba",
        autor: "Machado de Assis",
        image:
          "https://m.media-amazon.com/images/I/61k9Y9fwZ6L._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
      },

      {
        titulo: "Os Sertões",
        autor: "Euclides da Cunha",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7e/Os_Sert%C3%B5es_livro_1902.jpg",
        desc: "Capa do livro",
      },

      {
        titulo: "Casa de Pensão",
        autor: "Aluísio Azevedo",
        image:
          "https://m.media-amazon.com/images/I/91AUmPizGxS._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
      },

      {
        titulo: "Broquéis",
        autor: "Cruz e Sousa",
        image:
          "https://m.media-amazon.com/images/I/717Mh1FB+bL._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
      },
    ],
  },
  {
    nome: "Literatura Estrangeira",
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
    nome: "Literatura Infantil",
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
    nome: "Livros de Formação Profissional",
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
    nome: "Contos Brasileiros",
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

function Page() {
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
              textoCard={categoria.textcard}
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

export default Page;
