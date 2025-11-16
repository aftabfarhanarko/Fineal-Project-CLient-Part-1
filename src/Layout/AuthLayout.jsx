import React from 'react';
import Logo from '../Shared/Logo';
import { Outlet } from 'react-router';
import loogo from '../assets//authImage.png'

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-[60vh] mt-15'>
            <Logo></Logo>
            <div className='flex '>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex bg-[#FAFDF0]'>
                   <img src={loogo}></img>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;