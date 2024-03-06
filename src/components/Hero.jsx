import React from 'react';
import hero from '../images/hero-1.png'
const Hero = () => {
    return (
        <>
        {/* hero:block  */}
            <section className='my-8 hero'>
                <div className="flex items-center justify-center flex-wrap">
                    <div className="hero__content w-full sm:w-1/2">
                        <h2 className='text-xl sm:text-2xl md:text-6xl w-full sm:w-5/6 text-stone-700 my-10 font-bold'>Exploring cities through data analysis and visualization</h2>
                        <p className='text-md sm:text-xl  w-full sm:w-5/6'>
                        Morphocode is a design and development firm that uses data to visualize urban dynamics and provide location insights. Our team brings together expertise across architecture, urban planning, and software engineering.
                        </p>
                    </div>
                    <div className="hero__img w-full sm:w-1/2">
                        <img src={hero}  alt="hero-1" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
