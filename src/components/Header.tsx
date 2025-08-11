"use client";
import { logOutServerAction } from "@/actions/authServerAction";
import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const route = useRouter()

    const handleLogout = () => {
        logOutServerAction()
        route.push('/')
        // toast.success('Log Out success..')



        console.log('success')
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "User", path: "/user" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="main-container flex items-center justify-between px-4 py-3 md:py-4">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    MyLogo
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={handleLogout} className="bg-blue-600 text-white px-5 hover:bg-blue-500 py-1.5 rounded-md">LogOut</button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IconX size={28} /> : <IconMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <nav className="flex flex-col space-y-4 px-4 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>

                        ))}
                        <button onClick={handleLogout} className="bg-blue-600 text-white hover:bg-blue-500 py-1.5 rounded-md">LogOut</button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
