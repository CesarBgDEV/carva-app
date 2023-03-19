import Head from "next/head";
import {FaFacebookF, FaGoogle, FaRegEnvelope} from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"

export default function Login(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-700">
            <Head>
                <title>Login</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    {/* Sign In Section */}
                    <div className="w-3/5 p-5">
                        <div className="text-left font-bold">
                            <span className=" text-yellow-500 ">CARVA</span> APP
                        </div>

                        <div className=" py-10 ">
                            <h2 className=" text-3xl font-bold text-yellow-500 mb-2">Ingresa con una cuenta</h2>
                            <div className=" border-2 w-40 border-yellow-500 inline-block mb-2"></div>

                            {/* Social Login Section */}
                            <div className=" flex justify-center my-2">
                                <a href="#" className=" border-2 border-gray-200 rounded-full p-3  mx-1">
                                    <FaFacebookF className=" text-sm"/>
                                </a>
                                <a href="#" className=" border-2 border-gray-200 rounded-full p-3  mx-1">
                                    <FaGoogle className=" text-sm"/>
                                </a>
                            </div>
                            <p className=" text-gray-400 my-3">Usar tu cuenta de correo</p>

                            <div className=" flex flex-col items-center">
                                <div className="bg-gray-100 w-64 p-2 flex items-ceter mb-3">
                                    <FaRegEnvelope className=" text-gray-400 m-2 " />
                                    <input type='email' name="email" placeholder="Email" className=" bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                                <div className="bg-gray-100 w-64 p-2 flex items-ceter mb-3">
                                    <MdLockOutline className=" text-gray-400 m-2 " />
                                    <input type='password' name="password" placeholder="Password" className=" bg-gray-100 outline-none text-sm flex-1"/>
                                </div>

                                <a href="/" className=" border-2 border-yellow-500 text-yellow-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow-500 hover:text-white">Entrar</a>

                            </div>
                        </div>
                    </div>

                    {/* Sign Up Section */}
                    <div className="w-2/5 bg-yellow-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2">CARVA APP</h2>

                        <div className="border-2 w-20 border-white inline-block mb-2"></div>

                        <p className="mb-10">Sitema de Control de Ingresos, Jugadores y Entrenadores</p>


                    </div>
                </div>
            </main>
        </div>


    )
}