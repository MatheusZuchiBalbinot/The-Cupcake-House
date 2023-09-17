import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Slider from '../components/SliderComponent'
import CharacteristicsComponent from '../components/CharacteristicsComponent'

import homeMadeCupCake from '../assets/homeMade.svg'
import delivery from '../assets/delivery.png'
import withLove from '../assets/withLove.png'
import variety from '../assets/variety.png'

import CupcakeCardComponent from '../components/CupcakeCardComponent'

import cupcakeChocolate from '../assets/CupCake__chocolate-WithoutBackground.png'

import CupCakeDiffComponent from '../components/CupCakeDiffComponent'

import Characteristics__Custom from '../assets/backgroundCupCake.jpg'

export default function Home() {

    return (
        <div className="min-h-screen" style={{
            backgroundImage: `url(${Characteristics__Custom})`,
            backgroundSize: 'cover',
          }}>
            
            <header id="header" className="grid grid-cols-6 p-4">
                <HeaderComponent />
            </header>

            <main id="main" className="row-span-4">
                
                <Slider /> 

                <h2 className='text-center text-2xl font-bold font-mono'> Diferencias: </h2>

                <div id='main__Differences' className='grid grid-cols-4 m-4 p-2 bg-pink-200 bg-opacity-40 rounded-2xl'>
                    <CupCakeDiffComponent title="Cupcake Artesanal" imageSrc={homeMadeCupCake} />
                    <CupCakeDiffComponent title="Grande Variedade" imageSrc={variety} />
                    <CupCakeDiffComponent title="Feito com Amor" imageSrc={withLove} />
                    <CupCakeDiffComponent title="Entrega Delivery" imageSrc={delivery} />
                </div>

                <h2 className='text-center text-2xl font-bold font-mono'> Principais Cupcakes: </h2>

                <div className='grid grid-cols-4'>
                    <CupcakeCardComponent
                        imageSrc={cupcakeChocolate}
                        title="Black King"
                        massa="Chocolate"
                        recheio="Doce de leite"
                        comp="Granulado"
                        cobertura="Brigadeiro"
                        preco="R$ 19,99"
                    />
                    <CupcakeCardComponent
                        imageSrc={cupcakeChocolate}
                        title="Black King"
                        massa="Chocolate"
                        recheio="Doce de leite"
                        comp="Granulado"
                        cobertura="Brigadeiro"
                        preco="R$ 19,99"
                    />
                    <CupcakeCardComponent
                        imageSrc={cupcakeChocolate}
                        title="Black King"
                        massa="Chocolate"
                        recheio="Doce de leite"
                        comp="Granulado"
                        cobertura="Brigadeiro"
                        preco="R$ 19,99"
                    />
                    <CupcakeCardComponent
                        imageSrc={cupcakeChocolate}
                        title="Black King"
                        massa="Chocolate"
                        recheio="Doce de leite"
                        comp="Granulado"
                        cobertura="Brigadeiro"
                        preco="R$ 19,99"
                    />
                </div>

                <h2 className='text-center text-2xl font-bold font-mono'> Sobre nós: </h2>

                <div id='main__Characteristics' className='w-full'> 

                    <CharacteristicsComponent />

                </div>

            </main>

            <footer className="row-span-1">

                <FooterComponent />
                
            </footer>

        </div>
    )
}