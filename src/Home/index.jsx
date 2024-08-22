import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ListarProdutos from "../components/ListarProdutos"

export default function Home () {
        const [produtos, setProdutos] = useState([{
            nome: "É assim que acaba",
            autor: "Colleen Hoover",
            preco: 49.99,
            imagem: "https://leitura.com.br/image/cache/products/9788501112514-228x228.jpg",
            capa: "capa flexível",
            editora: "Galera",
            temas: ["violência doméstica", "abuso psicológico"]
         },
         {
            nome: "Tarde Demais",
            autor: "Colleen Hoover",
            preco: 49.99,
            imagem: "https://leitura.com.br/image/cache/products/9786559813858-228x228.jpg",
            capa: "capa flexível",
            editora: "Galera",
            temas: ["amor obssessivo", "financeiro"]
         },
         {
            nome: "Confesse",
            autor: "Colleen Hoover",
            preco: 49.99,
            imagem: "https://leitura.com.br/image/cache/products/9788501109323-228x228.jpg",
            capa: "capa flexível",
            editora: "Galera",
            temas: ["amor", "perda", "trauma", "superação"]
         },
         {
            nome: "As Mil Partes do meu Coração",
            autor: "Colleen Hoover",
            preco: 49.99,
            imagem: "https://leitura.com.br/image/cache/products/9788501115744-228x228.jpg",
            capa: "capa flexível",
            editora: "Galera",
            temas: ["dramas familiares", "poder da verdade"]
         },
         {
            nome: "O lado feio do amor",
            autor: "Colleen Hoover",
            preco: 49.99,
            imagem: "https://leitura.com.br/image/cache/products/9788501105738-228x228.jpg",
            capa: "capa flexível",
            editora: "Galera",
            temas: ["amor", "perda", "redenção"]
         }
        ])
    

    return (
        
        <>
            <Header/>
            <Carousel
            infiniteLoop
            useKetboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight
            >
                <div>
                    <img src="https://leitura.com.br/image/cache/catalog/BANNER-SITEpre%C3%A7o20-1920x300.png"></img>
                </div>
                <div>
                    <img src="https://leitura.com.br/image/cache/catalog/DarkSide_Amor-Monstro-1920x300-02%20(1)%20(1)-1920x300.jpg"></img>
                </div>
                <div>
                    <img src="https://leitura.com.br/image/cache/catalog/BANNER-VALE-PRESENTE-PNG33-1920x300.png"></img>
                </div>
            </Carousel>
            <h1>Collen Hoover</h1>
            <ListarProdutos listaProdutos={produtos}/>
            <Footer/>
        </>
    )
}