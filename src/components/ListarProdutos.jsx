import { useState } from "react"

export default function ListarProdutos({listaProdutos}){
    return(
        <div>
          {listaProdutos.map((produto)=>
            <div key={produto.id}>
                <img src="{produto.imagem}"/>
                <h2>{produto.nome}</h2>
                <p>{produto.autor}</p>
                <p>{produto.capa}</p>
                <h3>{produto.preco}</h3>
            </div>
        )}
        </div> 
    );
}