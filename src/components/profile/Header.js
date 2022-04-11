import React from 'react'
import { Icon } from '@iconify/react';
import profile from "../../assets/profile-marcha.svg";

function Header() {
  return (
    <header className='px-5 py-8 mb-5 pb-5 bg-white' style={{ boxShadow: "2px 2px 5px 0px #9D20FF1A" }}>
        <div className='flex gap-3 items-center mb-3 cursor-pointer'>
            <img src={profile} className="h-14 w-14 rounded-lg" alt="" />
            <div>
                <div className='flex gap-1 justify-center items-center text-base font-semibold'>
                    <h5>Muhammad Emirsyah</h5>
                    <Icon icon="ic:round-verified" width="18" className='text-purple-600'/>
                </div>
                <p className='font-medium text-sm text-purple-600'>@emrsyahh</p>
            </div>
        </div>
        <p className='text-sm opacity-90'>Hello Marchanians, Welcome!</p>
        <p className='text-sm cursor-pointer'><span className='font-semibold mt-[6px]'>16</span> Friends</p>
    </header>
  )
}

export default Header