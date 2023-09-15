import CupCake__Logo from '../assets/CupCake__Logo.png'

export default function HeaderComponent() {
    return (
        <>
            <div id="header__LeftSide" className="col-span-1">
                <div id="header__LeftSide__imageWrapper" className='h-full flex'>
                    <img src={CupCake__Logo} className='w-16 m-auto'/>
                </div>
            </div>
            <div id="header__RightSide" className="col-span-5 my-auto justify-end text-slate-950" >

                <div id='header_groupingButtons' className='justify-end flex gap-16 pr-12'>
                    <div id='header__RightSide__buttons' className='m-4 hover:border-solid hover:border-b-2 hover:border-indigo-600'>
                        <button>Home</button>
                    </div>

                    <div id='header__RightSide__buttons' className='m-4 hover:border-solid hover:border-b-2 hover:border-indigo-600'>
                        <button>Contato</button>
                    </div>

                    <div id='header__RightSide__buttons' className='m-4 hover:border-solid hover:border-b-2 hover:border-indigo-600'>
                        <button>Menu</button>
                    </div>

                    <div id='header__RightSide__buttons' className='m-4 hover:border-solid hover:border-b-2 hover:border-indigo-600'>
                        <button>História</button>
                    </div>
                </div>
            </div>
        </>
    )
}