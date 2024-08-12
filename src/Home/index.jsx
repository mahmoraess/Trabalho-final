import Header from "../components/Header"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default function Home () {

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
                    <img src=""></img>
                </div>
                <div>
                    <img src=""></img>
                </div>
                <div>
                    <img src=""></img>
                </div>
            </Carousel>
            <h1>Lista Livros</h1>
        </>
    )
}