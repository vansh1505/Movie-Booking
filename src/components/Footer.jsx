import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate400 text-whie py-2">
            <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <img className="h-10" src="logo3.png" alt="Logo" />
                    <span className="font-semibold text-xl border-r pr-3 border-gray-400">BookMySeat</span>
                    <p className='pl-3'>&copy; 2024 BookMySeat</p>
                </div>
                <div className="flex flex-col md:flex-row md:gap-8">
                    <a href="#hme" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
