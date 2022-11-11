import React from 'react'
import { useState, useEffect } from 'react'
import '../style/Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [featuresMenuOpen, setFeaturesMenuOpen] = useState(false)
    const [companyMenuOpen, setCompanyMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 800) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        if (window.innerWidth < 800) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    })

    return (
        <section id="navbar">
            <nav>
                <ul className='navbar'>
                    <li><h1>snap</h1></li>

                    {/* HAMBURGER MENU IF MOBILE */}
                    <li><button className='toggleNavBtn' onClick={() => { setMenuOpen(true) }}><img src="./public/assets/icon-menu.svg" alt="Hamburger menu button" /></button></li>

                    {/* NAVBAR LINKS IF DESKTOP */}
                    {/* @TODO: make desktop links */}

                </ul>

                {menuOpen && (
                    <div className='sideMenu-wrapper'>
                        <ul className='sideMenu'>
                            <li className='closeButton-wrapper'><button className='toggleNavBtn' onClick={() => { setMenuOpen(false) }}><img src="./public/assets/icon-close-menu.svg" alt="Hamburger menu button" /></button></li>
                            <li>
                                <div onClick={() => { setFeaturesMenuOpen(prevValue => !prevValue) }}>Features
                                    {featuresMenuOpen ?
                                        <img src="./public/assets/icon-arrow-up.svg" alt="Arrow pointing up" className='arrow' /> :
                                        <img src="./public/assets/icon-arrow-down.svg" alt="Arrow pointing down" className='arrow' />}</div>

                                {/* Submenu Features */}
                                {featuresMenuOpen && (
                                    <ul className='submenu'>
                                        <li><img src="./public/assets/icon-todo.svg" alt="Todo list icon" /> Todo List</li>
                                        <li><img src="./public/assets/icon-calendar.svg" alt="Calendar icon" />Calendar</li>
                                        <li><img src="./public/assets/icon-reminders.svg" alt="Bell icon" />Reminders</li>
                                        <li><img src="./public/assets/icon-planning.svg" alt="Clock icon" />Planning</li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <div onClick={() => { setCompanyMenuOpen(prevValue => !prevValue) }}>Company
                                    {companyMenuOpen ?
                                        <img src="./public/assets/icon-arrow-up.svg" alt="Arrow pointing up" className='arrow' /> :
                                        <img src="./public/assets/icon-arrow-down.svg" alt="Arrow pointing down" className='arrow' />}</div>

                                {/* Submenu Features */}
                                {companyMenuOpen && (
                                    <ul className='submenu'>
                                        <li>History</li>
                                        <li>Our Team</li>
                                        <li>Blog</li>
                                    </ul>
                                )}
                            </li>
                            <li>Careers</li>
                            <li>About</li>
                            <li>
                                <button className='loginButton'>Login</button>

                            </li>
                            <li><button className='registerButton'>Register</button></li>
                        </ul>
                    </div>
                )
                }

            </nav>
        </section>
    )
}


export default Navbar