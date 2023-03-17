import { forwardRef } from "react";
import Link from 'next/link';
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) =>{
    const router = useRouter();

    return (
        <div ref={ref} className="fixed w-56 h-full bg-gray-700	 shadow-sm">
            <div className="flex justify-center mt-6 mb-14">

                <picture>
                    <img src="/logo.png" alt="CARVA APP" className="w-32 h-auto" />
                </picture>

                
            </div>

            <div className="felx flex-col">

                <Link href="/" >
                    <div className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/" ? "bg-yellow-100 text-yellow-500" : "text-gray-400 hover:bg-yellow-100 hover:text-yellow-500" }`}>

                        <div className="mr-2">
                            <HomeIcon className="h-5 w-5"  />
                        </div>

                        <div>
                            <p>Inicio</p>
                        </div>
                    </div>
                </Link>

                <Link href="/players" >
                    <div 
                    className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/players" ? "bg-yellow-100 text-yellow-500" : "text-gray-400 hover:bg-yellow-100 hover:text-yellow-500" }`}
                    >

                        <div className="mr-2">
                            <UserIcon className="h-5 w-5"  />
                        </div>

                        <div>
                            <p>Jugadores</p>
                        </div>
                    </div>
                </Link>

                <Link href="/players" >
                    <div 
                    className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/players" ? "bg-yellow-100 text-yellow-500" : "text-gray-400 hover:bg-yellow-100 hover:text-yellow-500" }`}
                    >

                        <div className="mr-2">
                            <UserIcon className="h-5 w-5"  />
                        </div>

                        <div>
                            <p>Entrenadores</p>
                        </div>
                    </div>
                </Link>

                <Link href="/billing" >
                    <div 
                    className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${router.pathname == "/billing" ? "bg-yellow-100 text-yellow-500" : "text-gray-400 hover:bg-yellow-100 hover:text-yellow-500" }`}
                    >

                        <div className="mr-2">
                            <CreditCardIcon className="h-5 w-5"  />
                        </div>

                        <div>
                            <p>Ingresos</p>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
});

SideBar.displayName = 'SideBar';

export default SideBar;