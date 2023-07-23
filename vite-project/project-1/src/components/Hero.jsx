import React from 'react'

const Hero = () => {
    return (
        <main className='hero'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now </button>
                    <button>Category</button>
                 </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-i">
                        <img src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-png-download-0.png" alt="" />
                         <img src="https://www.citypng.com/public/uploads/preview/-11596400565qsuxfwyv9j.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
            </div>
        </main>
    )
}

export default Hero