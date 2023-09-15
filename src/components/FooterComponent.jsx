import {BsFacebook, BsInstagram} from "react-icons/bs"
import {RiTwitterXFill} from 'react-icons/ri'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlinePhone} from 'react-icons/ai'
import {MdOutlineMailOutline} from 'react-icons/md'

export default function FooterComponent() {
    return(
        <>
            <div id="footer__shopInfo" className='grid grid-cols-5 justify-around m-4'>
                <div id='footer_Contact' className='col-span-3 m-auto'>
                    <div id='footer_Contact__Div' className='flex my-auto p-2 gap-x-4'>
                        <div id='footer_Contact__Div__Icon' className='my-auto'>
                            <CiLocationOn className='text-2xl'/>
                        </div>
                        <h2 className='text-sm'> SC-484, Km 02 - Fronteira Sul, Chapecó - SC </h2>
                    </div>

                    <div id='footer_Contact__Div' className='flex my-auto p-2 gap-x-4'>
                        <div id='footer_Contact__Div__Icon' className='my-auto'>
                            <AiOutlinePhone className='text-2xl'/>
                        </div>
                        <h2 className='text-sm'> 49 4002-8922 </h2>
                    </div>

                    <div id='footer_Contact__Div' className='flex my-auto p-2 gap-x-4'>
                        <div id='footer_Contact__Div__Icon' className='my-auto'>
                            <MdOutlineMailOutline className='text-2xl'/>
                        </div>
                        <h2 className='text-sm'> cupcakeHouse@gmail.com </h2>
                    </div>

                </div>

                <div id='footer__IconsDiv' className='col-span-2 m-auto'>
                    <div id='footer__IconsDiv__Icons' className='flex justify-around'>
                        <BsFacebook className='m-8 text-xl'/>
                        <BsInstagram className='m-8 text-xl'/>
                        <RiTwitterXFill className='m-8 text-xl'/>
                    </div>
                </div>
            </div>

            <div id='footer__RightsReserved' className='m-auto flex justify-center'>
                <h2 className='mb-4 text-base'> © 2023 Cupcake House - Todos os direitos reservados. </h2>
            </div>
        </>
    )
}