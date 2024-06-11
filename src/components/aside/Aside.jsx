import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeSvg from '../../assets/asideIcons/home.svg';
import SavedSvg from '../../assets/asideIcons/gallery.svg';
import HistorySvg from '../../assets/asideIcons/history.svg';
import SettingsSvg from '../../assets/asideIcons/settings.svg';
import Logo from '../../assets/logo1.jpeg';
import Hamberger from '../../assets/menu.svg'
const Aside = () => {
    const asideLinks = [
        {
            title: 'home',
            icon: HomeSvg
        },
        {
            title: 'saved quotes',
            icon: SavedSvg
        },
        {
            title: 'history',
            icon: HistorySvg
        },
        {
            title: 'settings',
            icon: SettingsSvg
        },
    ]
    return (
        <aside className='hidden sm:block max-w-full w-full sm:w-80 h-screen bg-gray-700 p-2 rounded-t-lg shrink-0'>
            <div className="flex items-center justify-between">

                <div className="logo w-14 h-14">
                    <img src={Logo} className='w-full h-full rounded-full' alt="" />
                </div>
                <div className="logo w-10 h-10 rounded-">
                    <img src={Hamberger} className='w-full h-full' alt="" />
                </div>

            </div>
            <ul className='mt-10 flex flex-col items-stretch justify-between h-[calc(100dvh-115px)] '>
                <li>

                {
                    asideLinks.map((item, i) =>
                        (i!=3)&&
                        <NavLink key={item.title} to={i==0?'/':item.title} className={({ isActive })=>`${isActive && 'bg-green-500 hover:bg-green-500'} w-full mt-2 px-4 py-2 transition ${!isActive && 'hover:bg-gray-600'} rounded-lg flex items-center gap-2`}>
                            <img src={item.icon} className='w-8 h-8' alt={item.title} />
                            <span className='capitalize text-white'>{item.title}</span>
                        </NavLink>
                    )
                }
                </li>
                <li>
                <NavLink to={asideLinks[asideLinks.length-1].title} className={({ isActive })=>`${isActive && 'font-semibold bg-blue-400 hover:bg-blue-400'} w-full mt-2 px-4 py-2 transition hover:bg-gray-600 rounded-lg flex items-center gap-2`}>
                            <img src={asideLinks[asideLinks.length-1].icon} className='w-8 h-8' alt={asideLinks[asideLinks.length-1].title} />
                            <span className='capitalize text-white'>{asideLinks[asideLinks.length-1].title}</span>
                        </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Aside