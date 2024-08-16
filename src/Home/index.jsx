import { useState } from "react"
import Header from "../components/Header"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ListarProdutos from "../components/ListarProdutos"

export default function Home () {
        const [produtos, setProdutos] = useState([{
            nome: "É assim que acaba",
            autor: "Colleen Hoover",
            preco: 49.99
         },
         {
            nome: "Tarde Demais",
            autor: "Colleen Hoover",
            preco: 49.99
         },
         {
            nome: "Confesse",
            autor: "Colleen Hoover",
            preco: 49.99
         },
         {
            nome: "Without Merit",
            autor: "Colleen Hoover",
            preco: 49.99
         },
         {
            nome: "O lado feio do amor",
            autor: "Colleen Hoover",
            preco: 49.99
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
            <h1>Lista Livros</h1>
            <ListarProdutos listaProdutos={produtos}/>
        </>
    )
}