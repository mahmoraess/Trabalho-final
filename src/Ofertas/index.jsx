import { useState } from "react"
import ListarProdutos from "../components/ListarProdutos"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Ofertas () {
    const [produtos, setProdutos] = useState([{
        nome: "A Hora da Estrela",
        autor: "Clarice Lispector",
        preco: 25.00,
        imagem: "https://leitura.com.br/image/cache/products/9786555320350-228x228.jpg",
        capa: "capa flexível",
        editora: "Galera",
        temas: ["condição humana", "imigração"]
     },
     {
        nome: "A Garota do Lago",
        autor: "Charlie Donlea",
        preco: 19.99,
        imagem: "https://leitura.com.br/image/cache/products/9788562409882-500x500.jpg",
        capa: "capa flexível",
        editora: "Faro Editorial",
        temas: ["misterio", "suspense", "abuso"]
     },
     {
        nome: "100 motivos para te amar",
        autor: "Gabriela Herrero",
        preco: 35.55,
        imagem: "https://leitura.com.br/image/cache/products/9788582306352-228x228.jpg",
        capa: "capa flexível",
        editora: "Matrix",
        temas: ["romance", "amor"]
     },
     {
        nome: "Divergente",
        autor: "Veronica Roth",
        preco: 37.93,
        imagem: "https://leitura.com.br/image/cache/products/9786555321814-228x228.jpg",
        capa: "capa flexível",
        editora: "Rocco",
        temas: ["distopia", "suspense", "romance", "escolhas"]
     },
     {
        nome: "O Deus que destrói sonhos",
        autor: "Rodrigo Bibo",
        preco: 31.87,
        imagem: "https://leitura.com.br/image/cache/products/9786556891859-228x228.jpg",
        capa: "capa dura",
        editora: "Thomas Nelson Brasil",
        temas: ["Deus", "religião", "superação"]
     },
     {
        nome: "Tudo é rio",
        autor: "Carla Madeira",
        preco: 40.00,
        imagem: "https://leitura.com.br/image/cache/products/9786555871784-228x228.jpg",
        capa: "capa flexível",
        editora: "Record",
        temas: [""]
     },
     {
        nome: "Os sete maridos de Evelyn Hugo",
        autor: "Taylor Jenkins Reid",
        preco: 32.21,
        imagem: "https://leitura.com.br/image/cache/products/9788584391509-228x228.jpg",
        capa: "capa flexível",
        editora: "Paralela",
        temas: [""]
     },
     {
        nome: "Vermelho, branco e sangue azul",
        autor: "Casey McQuiston",
        preco: 35.78,
        imagem: "https://leitura.com.br/image/cache/products/9788555340949-228x228.jpg",
        capa: "capa flexível",
        editora: "Seguinte",
        temas: [""]
     },
     {
        nome: "O homem mais rico da Babilônia",
        autor: "George S. Clason",
        preco: 25.05,
        imagem: "https://leitura.com.br/image/cache/products/9788595081536-228x228.jpg",
        capa: "capa flexível",
        editora: "HarperCollins",
        temas: [""]
     },
     {
        nome: "A revolução dos bichos",
        autor: "George Orwell",
        preco: 15.22,
        imagem: "https://leitura.com.br/image/cache/products/9788535909555-228x228.jpg",
        capa: "capa flexível",
        editora: "Companhia das Letras",
        temas: [""]
     }
    ])

    return (
      <div>
        <Header/>
        <ListarProdutos listaProdutos={produtos}/>
        <Footer/>
        </div>
    )
}