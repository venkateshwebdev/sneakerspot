import Aos from "aos";
import React, { Suspense, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
const Home = () => {
    const About = React.lazy(()=>import('./About'))
    useEffect(()=>{
        Aos.init({duration:1000,easing:"ease-in-out"})
    })
    return (
        <>
        <div className="home-container">
            <div className="home-content">
                <div className="home-title">Discover Your Sole Destination</div>
                <p>Unleash Your Sneaker Style with SneakerSpot - Where Sneakers Shine</p>
                <div className="home-button"><button><Link to={"/shop"}>Shop Our Styles</Link></button></div>
                </div>

            <div className="home-hero"><img data-aos="fade-up" src="https://static.nike.com/a/images/t_default/459c2382-d340-4a62-ba7e-f7532256ebe7/jordan-why-not-6-pf-shoes-WvTHFW.png"/></div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            <About />
        </Suspense>
        </>
     );
}
 
export default Home;