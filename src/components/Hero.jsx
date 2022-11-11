import React from 'react'
import '../style/Hero.css'

function Hero() {
    return <section id='hero'>
        <div className='flex-container'>
            <img className='hero-image' src="./public/assets/image-hero-mobile.png" alt="" />


            <div className='item'>
                <div className='container'>

                    <h1>Make remote work</h1>

                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

                    <button>Learn More</button>

                </div>

                <div className='grid-container'>
                    <img src="./public/assets/client-databiz.svg" alt="" />
                    <img src="./public/assets/client-audiophile.svg" alt="" />
                    <img src="./public/assets/client-meet.svg" alt="" />
                    <img src="./public/assets/client-maker.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
}

export default Hero