import { useState } from "react"
import ListarProdutos from "../components/ListarProdutos"

export default function Ofertas () {
    const [produtos, setProdutos] = useState([{
        nome: "A Hora da Estrela",
        autor: "Clarice Lispector",
        preco: 25.00
     },
     {
        nome: "A Garota do Lago",
        autor: "Charlie Donlea",
        preco: 19.99
     },
     {
        nome: "100 motivos para te amar",
        autor: "Gabriela Herrero",
        preco: 35.55
     },
     {
        nome: "Divergente",
        autor: "Veronica Roth",
        preco: 37.93
     },
     {
        nome: "O Deus que destói sonhos",
        autor: "Rodrigo Bibo",
        preco: 31.87
     },
     {
        nome: "Tudo é rio",
        autor: "Carla Madeira",
        preco: 40.00
     },
     {
        nome: "Os sete maridos de Evelyn Hugo",
        autor: "Taylor Jenkins Reid",
        preco: 32.21
     },
     {
        nome: "Vermelho, branco e sangue azul",
        autor: "Casey McQuiston",
        preco: 35.78
     },
     {
        nome: "O homem mais rico da Babilônia",
        autor: "George S. Clason",
        preco: 25.05
     },
     {
        nome: "A revolução dos bichos",
        autor: "George Orwell",
        preco: 15.22
     }
    ])

    return (
        <ListarProdutos listaProdutos={produtos}/>
    )
}