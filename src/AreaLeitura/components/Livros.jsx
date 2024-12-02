import './css/livrosstyle.css'

function Livros(props) {
  return (
    
    <div className="livro">
    <a href={props.pdf} download>
      <img className='imagemLivro' src={props.image} alt={props.desc} draggable="false" />
    </a>
    <div className="legenda">
    <h4 >{props.titulo}</h4>
    <p>{props.autor}</p>
    </div>
  </div>
);
}

export default Livros;
