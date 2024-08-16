import { useState } from "react"

export default function ListarProdutos({listaProdutos}){
    return(
        <div>
          {listaProdutos.map((produto)=>
            <div>
                <p>{produto.nome}</p>
            </div>
        )}
        </div> 
    );
}