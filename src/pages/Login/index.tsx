import React, { useEffect, useRef, useState } from 'react';
import styles from "./index.module.css"
// import 'bootstrap-icons/font/bootstrap-icons.css';

const IndexPage: React.FC = () => {
    const [active, setActive] = useState(false);

    return (
        <div className={`flex justify-center items-center min-h-screen w-full`}>
            <div className={`relative w-3/5 h-[650px] shadow-lg rounded-md overflow-hidden flex ${active ? 'transform transition-all duration-[1.5s]' : ''}`}>

                {/* Sign In/Up Forms */}
                <div className={`relative w-1/2 flex flex-col items-center justify-center text-center bg-white transition-transform duration-[1.15s] ${active ? 'translate-x-full' : ''}`}>
                
                    {/* Sign In Form */}
                    <div className={`absolute w-full h-full flex flex-col items-center justify-center text-center ${active ? 'opacity-0 z-0' : 'opacity-100 z-50'}`}>
                        <h3 className="text-[40px] font-bold text-[#222]">Sign In</h3>
                        <span className="text-gray-600">or use your account</span>
                        <form className="mt-6">
                            <div className="mb-6">
                                <input type="email" placeholder="Email" className="w-80 h-12 bg-gray-200 px-4 text-lg" />
                            </div>
                            <div className="mb-6">
                                <input type="password" placeholder="Password" className="w-80 h-12 bg-gray-200 px-4 text-lg" />
                            </div>
                            <div className="text-sm mb-4">
                                <span className="text-gray-600 cursor-pointer">Forgot your password?</span>
                            </div>
                            <button type="button" className="bg-[#3e8fff] text-white py-3 px-12 rounded-full">Sign In</button>
                        </form>
                    </div>

                    {/* Sign Up Form */}
                    <div className={`absolute w-full h-full flex flex-col items-center justify-center text-center ${active ? 'opacity-100 z-50' : 'opacity-0 z-0'}`}>
                        <h3 className="text-4xl text-gray-800">Sign Up</h3>
                        <span className="text-gray-600">or use your email for registration</span>
                        <form className="mt-6">
                            <div className="mb-6">
                                <input type="text" placeholder="Name" className="w-80 h-12 bg-gray-200 px-4 text-lg" />
                            </div>
                            <div className="mb-6">
                                <input type="email" placeholder="Email" className="w-80 h-12 bg-gray-200 px-4 text-lg" />
                            </div>
                            <div className="mb-6">
                                <input type="password" placeholder="Password" className="w-80 h-12 bg-gray-200 px-4 text-lg" />
                            </div>
                            <button type="button" className="bg-[#3e8fff] text-white py-3 px-12 rounded-full">Sign Up</button>
                        </form>
                    </div>
                </div>

                {/* Overlay */}
                <div className={`w-1/2 bg-[#3e8fff] flex flex-col items-center justify-center text-center transition-transform duration-[1.5s] ${active ? '-translate-x-full' : ''}`}>
                    {/* Sign In Side */}
                    <div className={`absolute flex flex-col items-center justify-center h-full w-full ${active ? 'opacity-0 -ml-full' : 'opacity-100'}`}>
                        <h3 className="text-4xl text-white">Welcome Back!</h3>
                        <p className="text-lg text-white font-semibold mb-4">To keep connected with us please login with your personal info</p>
                        <button onClick={() => setActive(false)} className="text-white py-3 px-12 border border-white rounded-full">
                            Sign Up <i className="bi bi-arrow-right ml-2"></i>
                        </button>
                    </div>

                    {/* Sign Up Side */}
                    <div className={`absolute flex flex-col items-center justify-center h-full w-full ${active ? 'opacity-100 ml-0' : 'opacity-0'}`}>
                        <h3 className="text-4xl text-white">Hello Friend!</h3>
                        <p className="text-lg text-white font-semibold mb-4">Enter your personal details and start your journey with us</p>
                        <button onClick={() => setActive(true)} className="text-white py-3 px-12 border border-white rounded-full">
                            <i className="bi bi-arrow-left mr-2"></i> Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
