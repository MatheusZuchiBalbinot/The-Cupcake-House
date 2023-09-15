import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

export default function Home() {
    return (
        <div className="min-h-screen">
            
            <header id="header" className="grid grid-cols-6 m-4">
                <HeaderComponent />
            </header>

            <main id="main" className="row-span-4 grid grid-cols-2">
                <div id="main__LeftSide" className='bg-slate-700 text-zinc-100'>
                    <p className='text-center h-screen'> Lado Esquerdo</p>
                </div>

                <div id="main__RightSide" className='bg-red-700 text-gray-100'>
                    <p className='text-center h-screen'> Lado Direito</p>
                </div>
            </main>

            <footer className="row-span-1">
                <FooterComponent />
            </footer>

        </div>
    )
}