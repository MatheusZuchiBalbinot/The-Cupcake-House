import HeaderComponents from '../components/HeaderComponents'

import {BsFacebook, BsInstagram} from "react-icons/bs"
import {RiTwitterXFill} from 'react-icons/ri'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlinePhone} from 'react-icons/ai'
import {MdOutlineMailOutline} from 'react-icons/md'

export default function Home() {
    return (
        <div className="min-h-screen grid grid-cols-1 grid-rows-6">
            
            <header id="header" className="row-span-1 grid grid-cols-6">
                <HeaderComponents />
            </header>

            <main id="main" className="row-span-4 grid grid-cols-2 min-h-full">
                <div id="main__LeftSide" className='bg-slate-700 text-zinc-100'>

                </div>

                <div id="main__RightSide">

                </div>
            </main>

            <footer className="row-span-1">

                <div id='footer_Contact'>
                    <CiLocationOn />
                    <h2> SC-484, Km 02 - Fronteira Sul, Chapecó - SC, 89815-899 </h2>
                    <AiOutlinePhone />
                    <h2> 49 4002-8922 </h2>
                    <MdOutlineMailOutline />
                    <h2> cupcakeHouse@gmail.com </h2>
                </div>

                <div id='footer__IconsDiv'>
                    <h2>Siga-nos nas redes Sociais. </h2>
                    <div id='footer__IconsDiv__Icons'>
                        <BsFacebook />
                        <BsInstagram />
                        <RiTwitterXFill />
                    </div>
                </div>

                <div id='footer__OpeningHours'>
                    <h2> Horários de Funcionamento. </h2>
                    <div id='footer__IconsDiv__Icons'>
                        <h3> Segunda a Sexta: 07h30 as 11h30 e das 13h30 as 18h00 </h3>
                        <h3> Sábado: 08h00 as 12h00 </h3>
                    </div>
                </div>

                <div id='footer__RightsReserved'>
                    <h2> © 2023 Cupcake House - Todos os direitos reservados. </h2>
                </div>
            </footer>

        </div>
    )
}