import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import logoImage from '../../assets/lws.png'
import searchImage from '../../assets/search.svg'
function Navbar() {
  return (
    <nav className=" shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
                <Link to="/">
                    <img
                        className="w-10 rounded-full bg-black"
                        src={logoImage}
                        alt=" # "
                    />
                </Link>
                <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
                    <Search />
                    <img
                        className="inline h-4 cursor-pointer"
                        src={searchImage}
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
  )
}

export default Navbar
