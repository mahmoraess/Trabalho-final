import { useState } from "react"
import ListarProdutos from "../components/ListarProdutos"

export default function Produtos(){
    const [produtos, setProdutos] = useState ([{
        nome: "A Biblioteca da meia noite",
        autor: "Matt Haig",
        preco: 42.46,
        imagem: "https://leitura.com.br/image/cache/products/9786558380542-228x228.jpg",
        capa: "capa flexível",
        editora: "Bertrand Brasil",
        temas: [""]
     },
     {
        nome: "Maxton Hall: Salve-me - edição com brinde",
        autor: "Mona Kasten",
        preco: 54.90,
        imagem: "https://leitura.com.br/image/cache/products/9786585348966-228x228.jpg",
        capa: "capa dura",
        editora: "Alt",
        temas: [""]
     },
     {
        nome: "Mulheres que correm com os lobos",
        autor: "Clarissa Pinkola Estés",
        preco: 64.05,
        imagem: "https://leitura.com.br/image/cache/products/9788532529787-228x228.jpg",
        capa: "capa flexível",
        editora: "Rocco",
        temas: [""]
     },
     {
        nome: "Melhor do que nos filmes",
        autor: "Lynn Painter",
        preco: 46.29,
        imagem: "https://leitura.com.br/image/cache/products/9786555607284-228x228.jpg",
        capa: "capa flexível",
        editora: "Intrínseca",
        temas: [""]
     },
     {
        nome: "A empregada - Livro 1",
        autor: "Freida McFadden",
        preco: 45.68,
        imagem: "https://leitura.com.br/image/cache/products/9786555655063-228x228.jpg",
        capa: "capa flexível",
        editora: "Arqueiro",
        temas: [""]
     },
     {
        nome: "Jantar secreto",
        autor: "Raphael Montes",
        preco: 34.90,
        imagem: "https://leitura.com.br/image/cache/products/9788535928358-228x228.jpg",
        capa: "capa flexível",
        editora: "Companhia das Letras",
        temas: [""]
     },
     {
        nome: "Verity (Edição de colecionador)",
        autor: "Collen Hoover",
        preco: 59.92,
        imagem: "https://leitura.com.br/image/cache/products/9786559815043-228x228.jpg",
        capa: "capa dura",
        editora: "Galera",
        temas: [""]
     },
     {
        nome: "Alice no País das Maravilhas (Classic Edition)",
        autor: "Lewis Carrol",
        preco: 44.22,
        imagem: "https://leitura.com.br/image/cache/products/9788594541758-228x228.jpg",
        capa: "capa dura",
        editora: "Darkside",
        temas: [""]
     },
     {
        nome: "Em agosto nos vemos",
        autor: "Gabriel García Márquez",
        preco: 51.22,
        imagem: "https://leitura.com.br/image/cache/products/9788501920010-228x228.jpg",
        capa: "capa flexível",
        editora: "Record",
        temas: [""]
     },
     {
        nome: "Quarta Asa",
        autor: "Rebecca Yarros",
        preco: 84.64,
        imagem: "https://leitura.com.br/image/cache/products/9788542225853-228x228.jpg",
        capa: "capa flexível",
        editora: "Planeta Minotauro",
        temas: [""]
     },
     {
        nome: "Noiva",
        autor: "Ali Hazelwood",
        preco: 51.21,
        imagem: "https://leitura.com.br/image/cache/products/9786555656039-228x228.jpg",
        capa: "capa flexível",
        editora: "Arqueiro",
        temas: [""]
     },
     {
        nome: "Uma Família Feliz",
        autor: "Raphael Montes",
        preco: 51.21,
        imagem: "https://leitura.com.br/image/cache/products/9788535937039-228x228.jpg",
        capa: "capa flexível",
        editora: "Companhia das Letras",
        temas: [""]
     },
     {
        nome: "O Príncipe Cruel (Vol.1 O povo do ar)",
        autor: "Holly Black",
        preco: 42.68,
        imagem: "https://leitura.com.br/image/cache/products/9788501115553-228x228.jpg",
        capa: "capa flexível",
        editora: "Galera",
        temas: [""]
     },
     {
        nome: "Uma Vida Pequena",
        autor: "Hanya Yanagihara",
        preco: 75.04,
        imagem: "https://leitura.com.br/image/cache/products/9788501071545-228x228.jpg",
        capa: "capa flexível",
        editora: "Record",
        temas: [""]
     },
     {
        nome: "Coraline",
        autor: "Neil Gaiman",
        preco: 52.36,
        imagem: "https://leitura.com.br/image/cache/products/9788551006757-228x228.jpg",
        capa: "capa dura",
        editora: "Intrínseca",
        temas: [""]
     },
    ])

    return(
        <ListarProdutos listaProdutos={produtos}/>
    );
}