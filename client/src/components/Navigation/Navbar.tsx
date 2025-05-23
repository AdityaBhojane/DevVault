
import { LogIn, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { motion } from 'framer-motion';
import { Button, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';


const navLinks = [
    {title:'Home', path:"/explore"}, 
    {title:'Courses', path:"/course"}, 
    {title:'About', path:"/about"}, 
    {title:'Contact', path:'/contact'}];

export default function Navbar() {
    const setCurrentTheme = useTheme((state) => state.setCurrentTheme);
    const currentTheme = useTheme((state) => state.currentTheme);
    const navigate = useNavigate();
    return (
        <>
            {/* NAVBAR */}
            <header
                className={`w-full px-6 md:px-16 py-5 flex items-center justify-between fixed z-50 transition-colors duration-500 ${currentTheme ? 'bg-white' : 'bg-black'
                    }`}
            >
                <div className={`text-2xl font-extrabold ${currentTheme ? 'text-black' : 'text-white'}`}>
                    Dev<span className={`${currentTheme ? 'text-green-500' : 'text-emerald-400'}`}>Vault</span>
                </div>

                <nav className="hidden md:flex gap-6">
                    {navLinks.map((link, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={()=>navigate(link.path)}
                            className={`font-medium transition-colors duration-300 cursor-pointer ${currentTheme ? 'text-black hover:text-green-600' : 'text-white hover:text-green-400'
                                }`}
                        >
                            {link.title}
                        </motion.button>
                    ))}
                </nav>

                <div className="flex items-center gap-5">
                    <Button
                        type="primary"
                        icon={<LogIn size={16} />}
                        className="flex items-center gap-1 hover:scale-105 transition-transform"
                    >
                        Login
                    </Button>

                    <div className="flex gap-2 items-center">
                        {currentTheme ? <Moon className="text-black" /> : <Sun className="text-white" />}
                        <Switch defaultChecked onChange={setCurrentTheme} />
                    </div>
                </div>
            </header>
        </>
    )
}
