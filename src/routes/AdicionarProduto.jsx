import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AdicionarProduto.module.css"
export default function AdicionarProduto() {
  document.title = "Adicionar Produto";
  const navigate = useNavigate();
  let idProduto = ListaProdutos.length+1;
  const [produto, setProduto] = useState({
    id: idProduto,
    nome: "",
    preco: "",
    desc: "",
    img: "",
  });

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setProduto({...produto, [name]:value});
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    ListaProdutos.push(produto);
    navigate("/produtos")
  };
  return (
    <>
      <h1 className={classes.Centralizar}>ADICIONAR PRODUTO</h1>
      <form onSubmit={handleSubmit} className={classes.Formulario}>
        <fieldset>
          <legend className={classes.Negrito}>ADICIONAR PRODUTO</legend>
          <div>
            <label htmlFor="idNome" className={classes.Negrito}>Nome:</label>
            <input type="text" name='nome' placeholder="Nome..." onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="idPreco" className={classes.Negrito}>Preço:</label>
            <input type="number" name='preco' placeholder="Preço..." onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="idDesc" className={classes.Negrito}>Descrição:</label>
            <input type="text"name='desc' placeholder="Desc..." onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="idImg" className={classes.Negrito}>Imagem:</label>
            <input type="text" name='img' onChange={handleChange} placeholder="URL..." required/>
          </div>
          <input type="submit"  className={classes.Botao}  value="Enviar"/>
        </fieldset>
      </form>
      <div className={classes.Negrito}>
        <p >Nome: {produto.nome}</p>
        <p>Preço: {produto.preco}</p>
        <p>Descrição: {produto.desc}</p>
        <p>Imagem: {produto.img}</p>
      </div>
    </>
  );
}
