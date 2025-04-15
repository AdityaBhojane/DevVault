import { Outlet } from 'react-router-dom';
import React from 'react';
import { useTheme } from '../../zustand/Theme Store/useTheme';


const Auth: React.FC = () => {
    const currentTheme = useTheme(state => state.currentTheme)
    return (
        <div className={`w-full h-full overflow-hidden ${currentTheme ? "bg-gradient-to-r from-[#0f172a]  to-[#334155]" : "bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1]"}`}>
            <h2 className='text-center relative top-20 text-3xl font-bold'>DevVault</h2>
            <div
                className={`h-full flex items-center justify-center overflow-hidden`}>
                <div className="min-w-500px">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Auth;
