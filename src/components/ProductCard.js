import { useEffect, useState } from "react";
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { addItem } from "../store/cartSlice";
import { addToWishlist } from "../store/wishListSlice";
const ProductCard = (props) => {
    const [wishlisted,setWishlisted] = useState(false)
    const email = localStorage.getItem("user")
    const wishlist = useSelector(state=>state.wishlist.wishlist)
    const dispatch  = useDispatch()
    // useEffect(()=>{
    //     getUserData()
    // })
    // const getData = async()=>{
    //     const userData = await fetch(`http://localhost:8000/getuser/${email}`)
    //     const 
    // }
    const handleWhishlist = async()=>{
        setWishlisted(prev=>!prev)
        wishlist&&
        dispatch(addToWishlist(props.id))
        await fetch("http://localhost:8000/addtowhislist",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email,wishlist})
        })
        
    }
    return (
        <Link to={`/product/${props.id}`}><div className={`product-container ${props.home&&"homeproduct"}`} >
            <Link><div style={{position:"absolute",right:"10%",top:"5%",zIndex:1000}} onClick={handleWhishlist}>{!wishlisted?<AiOutlineHeart color="grey" fontSize={"20px"}/>:<AiFillHeart color="red" fontSize={"20px"}/>}</div></Link>
            <div><LazyLoadImage
      effect="blur"
      className="imgdiv"
      src={props.image}
      alt="Lazy Loaded Image"
    /></div>
            <div>
            <div className="product-title">{props?.title?.slice(0,20)}</div>
            <p>₹ {props.price}</p>
            </div>
        </div></Link>
    );
}
 
export default ProductCard;