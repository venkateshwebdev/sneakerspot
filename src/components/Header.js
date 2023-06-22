import Aos from "aos";
import { useContext,useState,useEffect } from "react";
import {GiHamburgerMenu} from "react-icons/gi"
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    const [width, setWidth] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
    
          if (currentScrollY > 0) {
            setWidth(true);
          } else {
            setWidth(false);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      useEffect(()=>{
        Aos.init({duration:4000})
      })
    return(
        <div className={`navbar-container`}>
            {
            !width?<div className="fullNavbar">
                <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
                <div className="navbar-logo logo">SS</div>
                <div className="navbar-logo"><Link to="/">SneakerSpot</Link></div>
                </div>
                <div data-aos="fade" style={{display:"flex",justifyContent:"space-between",gap:"20px"}}>
                <Link to="/">Home</Link>
                <Link to="login">Login</Link>
                <Link to="shop">Shop</Link>
                <Link to="cart">Cart</Link>
                </div>

            </div>
            :<div className="halfNavbar">
                {/* <div ><GiHamburgerMenu/></div> */}
                <div className="navbar-logo logo" onClick={()=>setWidth(false)}>SS</div>
            </div>
            }
        </div>
    );
}
 
export default Navbar;