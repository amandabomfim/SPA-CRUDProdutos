import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>ADICIONAR PRODUTO</legend>
          <div>
            <label htmlFor="idNome">Nome:</label>
            <input type="text" name='nome' placeholder="Nome..." onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="idPreco">Preço:</label>
            <input type="number" name='preco' placeholder="Preço..." onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição:</label>
            <input type="text"name='desc' placeholder="Desc..." onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="idImg">Imagem:</label>
            <input type="text" name='img' onChange={handleChange} placeholder="URL..." required/>
          </div>
          <input type="submit" value="Enviar"/>
        </fieldset>
      </form>
      <div>
        <p>Nome: {produto.nome}</p>
        <p>Preço: {produto.preco}</p>
        <p>Descrição: {produto.desc}</p>
        <p>Imagem: {produto.img}</p>
      </div>
    </>
  );
}
