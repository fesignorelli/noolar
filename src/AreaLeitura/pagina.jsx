import React, { useRef } from "react";
import "./components/css/AreaDaLeitura.css";
import AreaDaLeitura from "./components/Inicio";
import BoxLivros from "./components/Categorias";
import Livros from "./components/Livros";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Definindo as categorias e livros com título, autor, imagem e descrição
// Definindo as categorias e livros com título, autor, imagem e descrição
const categorias = [
  {
    nome: "Literatura Brasileira",
    textcard: (
      <>
        Mejora tu <span className="highlight">Comprensión</span> del idioma,{" "}
        <span className="highlight">amplía</span> tu vocabulario y{" "}
        <span className="highlight">escribe</span> de manera más clara y
        precisa!
      </>
    ),
    livros: [
      {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        image: "/DomCasmurroCapa.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LIteraturaPortuguesa/domCasmurro.pdf",
      },
      {
        titulo: "Iracema",
        autor: "José de Alencar",
        image:
          "https://m.media-amazon.com/images/I/71LCDi6E2oL._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LIteraturaPortuguesa/iracema.pdf",
      },
      {
        titulo: "O Ateneu",
        autor: "Raul Pompeia",
        image:
          "https://m.media-amazon.com/images/I/A17Rzp18iXL._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LIteraturaPortuguesa/oAteneu.pdf",
      },
      {
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        image: "https://m.media-amazon.com/images/I/81m1emiSp-S.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LIteraturaPortuguesa/oCortico.pdf",
      },
      {
        titulo: "A Escrava Isaura",
        autor: "Bernardo Guimarães",
        image:
          "https://m.media-amazon.com/images/I/61Bz-Qtxn4L._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LIteraturaPortuguesa/EscravaIsaura.pdf",
      },
      {
        titulo: "Quincas Borba",
        autor: "Machado de Assis",
        image:
          "https://m.media-amazon.com/images/I/61k9Y9fwZ6L._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LIteraturaPortuguesa/QuincasBorba.pdf",
      },
      {
        titulo: "Os Sertões",
        autor: "Euclides da Cunha",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7e/Os_Sert%C3%B5es_livro_1902.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LIteraturaPortuguesa/OsSertoes.pdf",
      },
      {
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        image:
          "https://images.tcdn.com.br/img/editor/up/783226/Memorias_Postumas_de_Bras_Cubas_site.png",
        desc: "Capa do livro",
        pdf: "/Livros/LIteraturaPortuguesa/memoriasPostumasDeBrasCubas.pdf",
      },
    ],
  },
  {
    nome: "Literatura Estrangeira",
    textcard: (
      <>
        Viaja <span className="highlight">por las páginas</span> de los mayores
        clásicos de la literatura mundial,{" "}
        <span className="highlight">descubre</span> nuevas culturas y{" "}
        <span className="highlight">amplía</span> tu visión del mundo!
      </>
    ),
    livros: [
      {
        titulo: "Ilíada",
        autor: "Homero",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyCoyQ07kla1Xp-nZF9thT4isO5Pn8UtNF7uEO5n_VTZ3jpZEq0r4PdLSFRUVoKgOwlRGVoXd-24qT8zX_7njY3TnaKFf2EEFvzEMpiX5Eb0iCvtibMbKVk0EG7W2_m5yJkFZxJ7XHhpca2czN1X6pbw3STw8vgY5yHW--GsfFOi5VSFU-lbRtIFECLw/s320-rw/Il%C3%ADada%20%E2%80%93%20Homero.jpg",
        desc: "Capa do livro",
        pdf: "https://drive.google.com/file/d/1GYDbdiWy_tQsD5WNDy-GGr2s6znWhEFA/view",
      },
      {
        titulo: "A Mandrágora",
        autor: "Nicolau Maquiavel",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3Mj_FoDzpFcE1Vq2unk9yTjSZG0h6nejfe4pFk73IJuxzKn0lKL_WE3-aB0uc3aqnG59Oe7h1FN9Uy5ITZEv1ngJ3i3Lzr9hK1an-TiaMRG23ephbdsTEkYEn4Q-rZ-XKg20bwNv9XfCLvuCGo3Zw524rGWqmh6zsQh3sdhGTQiXyFyIgAMUu9W28tg/w280/A%20Mandr%C3%A1gora%20%E2%80%93%20Nicolau%20Maquiavel.jpg",
        desc: "Capa do livro",
        pdf: "https://drive.google.com/file/d/1UFr3LUn-fvX8rU8bVHMwpf1C5lpT9afg/view",
      },
      {
        titulo: "Dom Quixote",
        autor: "Miguel de Cervantes",
        image:
          "https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525433633_hd.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaEstrangeira/domQuixote.pdf",
      },
      {
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        image:
          "https://m.media-amazon.com/images/I/81-HB-s9KVL._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaEstrangeira/OrgulhoEPreconceito.pdf",
      },
      {
        titulo: "A Divina Comédia",
        autor: "Dante Aliguieri",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEja8uDL31kaSSxKC8hkiV2TCHfkz2JWqnu4n2fRyeHyGBSUS8xyd2GjEDo4iFeAciI0a8YWiL7v484YMZAymiJhaoVAxXjo00yFO9IDuNQjMTZ_fabKSLpSu7s1-N-h2Iu7DrHXfx-LGUmi0QVeqOQQ0H9kyCBC-NAGBGTPARcqIukUClXYatgFa3oJrg/s320-rw/A%20Divina%20Com%C3%A9dia%20%5BObra%20Completa%5D%20%5BIlustrada%5D%20%E2%80%93%20Dante%20Aliguieri.jpg",
        desc: "Capa do livro",
        pdf: "https://drive.google.com/file/d/1qduCeRSx1pwdIhi0m7q-eES2ul7TbSba/view",
      },
      {
        titulo: "Assim Falou Zaratustra",
        autor: "Friedrich Nietzsche",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi43SsrS1gdDjxXQ0GyiE0zEGExZ2XOHWbqqyFEW_YA5tQsVjjrk13UXcq1nfsxYUMI4zApsjUbE6XU8EvFeTuZOL6A_Jq_GzKDiQW1RkEvLIYljW2mPWNjCU3AbAOpuj4FIS151LnZxSNX7C8BMqSPmwjwiTolW7gfGSYWZbB5nNh4hmjpFUyQyQoU4A/s320-rw/Assim%20Falou%20Zaratustra%20%E2%80%93%20Friedrich%20Nietzsche.jpg",
        desc: "Capa do livro",
        pdf: "https://drive.google.com/file/d/12fAc_zPZQbEZd9ItZtrbPyt8Kvzx0FYD/view",
      },
      {
        titulo: "A república",
        autor: "Platão",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLBL3HPdQzZUJQaMC_mfSqGWPzTXlSUNjxBW55XBHChU_iCf4kdQlM1reD4_g0b0GE76zV6CZsnzifbxrmT9mnO79Ywkh1LOaH3HRZiYex1ber9KN5N4qXHouA6YRXtYnb3C9w5cmC8I-zvGBESk_rHmOrINpQSi3BzXwttS5mHeTGnkRatQei9vEp_Q/s320-rw/A%20Rep%C3%BAblica%20%E2%80%93%20Plat%C3%A3o.jpg",
        desc: "Capa do livro",
        pdf: "https://drive.google.com/file/d/12QXnnR27q7b5on_oauAEDzRdAyu_6Fjp/view",
      },
      {
        titulo: "Alice no País das Maravilhas",
        autor: "Lewis Carroll",
        image:
          "https://http2.mlstatic.com/D_NQ_NP_691663-MLU69845281454_062023-O.webp",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaEstrangeira/AliceNoPaisDasMaravilhas.pdf",
      },
    ],
  },
  {
    nome: "Literatura Infantil",
textcard: (
  <>
    Enamórate de historias <span className="highlight">mágicas</span> y{" "}
    <span className="highlight">divertidas</span>, que despiertan la
    imaginación y <span className="highlight">enseñan</span> valores
    importantes para los niños!
  </>
),
    livros: [
      {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        image: "https://m.media-amazon.com/images/I/81fDUxOq7gL.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaInfantil/OPequenoPrincipe.pdf",
      },
      {
        titulo: "Pinóquio",
        autor: "Carlo Collodi",
        image:
          "https://m.media-amazon.com/images/I/710Z5PpF-LL._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaInfantil/Pinoquio.pdf",
      },
      {
        titulo: "A Bela Adormecida",
        autor: "Charles Perrault",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcY3FBMf96si8AGz3BxtV3mEt3KVYuqbHkbeIqbNzcjtf8VcE-HjC0WkAOD2414JAAQiw&usqp=CAU",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaInfantil/ABelaAdormecida.pdf",
      },
      {
        titulo: "Chapeuzinho Vermelho",
        autor: "Charles Perrault",
        image:
          "https://acdn.mitiendanube.com/stores/001/501/070/products/chapeuzinho-vermelho-e-o-lobo-mau1-ad856b0844bfe4c18b16614259280854-1024-1024.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaInfantil/ChapeuzinhoVermelho.pdf",
      },
      {
        titulo: "O Patinho Feio",
        autor: "Hans Christian Andersen",
        image:
          "https://m.media-amazon.com/images/I/918k9yYbhuL._AC_UF1000,1000_QL80_.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaInfantil/OPatinhoFeio.pdf",
      },
      {
        titulo: "Rapunzel",
        autor: "Irmãos Grimm",
        image:
          "https://m.media-amazon.com/images/I/71wWf-C-aUL._AC_UF894,1000_QL80_.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaInfantil/Rapunzel.pdf",
      },
      {
        titulo: "João e Maria",
        autor: "Irmãos Grimm",
        image:
          "https://cdn.awsli.com.br/899/899421/produto/34452554/f206ce63dd.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/LiteraturaInfantil/JoaoEMaria.pdf",
      },
    ],
  },
  {
    nome: "Formação Profissional",
    nome: "Formación Profesional",
    textcard: (
      <>
        Aprende a <span className="highlight">impulsar</span> tu carrera,{" "}
        <span className="highlight">desarrolla</span> habilidades valiosas y{" "}
        <span className="highlight">conquista</span> nuevos desafíos
        profesionales con estas lecturas!
      </>
    ),
    
    livros: [
      {
        titulo: "Desenvolvimento Pessoal e Profissional",
        autor: "Carlos Silva",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9d/Desenvolvimento_Pessoal.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/FormacaoProfissional/DesenvolvimentoPessoalEProfissional.pdf",
      },
      {
        titulo: "Gestão de Carreira",
        autor: "Patricia Costa",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Gestao_de_Carreira.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/FormacaoProfissional/GestaoDeCarreira.pdf",
      },
      {
        titulo: "Comunicação Eficaz no Ambiente Corporativo",
        autor: "Rafael Almeida",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/24/Comunicacao_Eficaz.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/FormacaoProfissional/ComunicacaoEficaz.pdf",
      },
      {
        titulo: "Gestão de Projetos para Iniciantes",
        autor: "Fernanda Martins",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/70/Gestao_de_Projetos.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/FormacaoProfissional/GestaoDeProjetos.pdf",
      },
      {
        titulo: "Liderança e Motivação",
        autor: "Eduardo Lima",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/63/Lideranca_Motivacao.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/FormacaoProfissional/LiderancaEMotivacao.pdf",
      },
      {
        titulo: "Empreendedorismo e Inovação",
        autor: "Joana Rocha",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/81/Empreendedorismo_Inovacao.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/FormacaoProfissional/EmpreendedorismoEInovacao.pdf",
      },
      {
        titulo: "Marketing Digital para Profissionais",
        autor: "Ricardo Souza",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Marketing_Digital.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/FormacaoProfissional/MarketingDigitalParaProfissionais.pdf",
      },
      {
        titulo: "Finanças Pessoais para Executivos",
        autor: "Laura Pereira",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/94/Financas_Pessoais.jpg",
        desc: "Capa do livro",
        pdf: "/Livros/FormacaoProfissional/FinancasPessoaisParaExecutivos.pdf",
      },
    ],
  },
];


function Page() {
  const livrosRefs = useRef([]);

  
  return (
    <div className="page">
      <AreaDaLeitura />
  
      <div className="cardsArea">
        {categorias.map((categoria, cardIndex) => (
          <div className="card" key={cardIndex}>
            <BoxLivros categoria={categoria.nome} textoCard={categoria.textcard} />
            
            <Swiper
              spaceBetween={10} // Espaço entre os itens
              slidesPerView="4.3" // Exibe os slides de forma automática
              onSlideChange={(e) => handleSlideChange(e, cardIndex)} // Se necessário, para ações ao mudar o slide
              className="livrosSwiper"
            >
              {categoria.livros.map((livro, index) => (
                <SwiperSlide key={index}>
                  <Livros {...livro} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
