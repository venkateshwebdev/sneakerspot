import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { removeItem } from "../../store/cartSlice";

const CartProduct = (props)=>{
    const dispatch = useDispatch()
    const [item,setItem] = useState()
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const rawData = await fetch(`https://sneakerspotapi.onrender.com/${props.id}`)
        const resData = await rawData.json()
        console.log(resData)
        setItem(resData)

    }
    const handleDelete = ()=>{
        dispatch(removeItem(item?.data._id))
        console.log("detle this ", item.data._id)
    }
    return(
        <div className="cart-products-container">
        {/* <ProductCard id={item?.data?._id} title={item?.data.title} price={item?.data.price} image={item?.data?.images?.[1]} /> */}
        <div className="cart-product">
        <Link to={`/product/${item?.data._id}`}><div className="cart-content">
                <img src={item?.data?.images?.[1]} alt={"image"} />
                <div>{item?.data.title.slice(0,25)}</div>
                <p style={{color:"gray"}}>from {item?.data.brand}</p>
                </div></Link>
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                <p>₹ {item?.data.price}</p>
                <div className="cart-delete" onClick={handleDelete}><h5><AiOutlineDelete /></h5></div>
            </div>
            
        </div>
        </div>
    
    )
}
const Cart = () => {
    const data = useSelector(state=>state.cart.productList)
    console.log("this is From Redux" ,data)
    return (
        <div className="cart-container">
            {data.map((e)=><CartProduct id={e} />)}
        </div>
    );
}
 
export default Cart;