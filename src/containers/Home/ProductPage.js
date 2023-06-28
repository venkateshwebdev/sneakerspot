import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem,removeItem } from "../../store/cartSlice";
import { AiOutlineHeart } from "react-icons/ai";
const Product = () => {
    const [data,setData] = useState()
    const [butttontog,setButttontog] = useState(true)
    const param = useParams().id

    const dispatch = useDispatch()
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const rawData = await fetch(`https://sneakerspotapi.onrender.com/${param}`)
        const resData = await rawData.json()
        console.log(resData)
        setData(resData)
    }
    const changeCart = ()=>{
        console.log(butttontog)
        if(butttontog){
            dispatch(addItem(data?.data._id))
        }
        else{
            dispatch(removeItem(data?.data._id))
        }
        setButttontog(prev=>!prev)
    }
    return (
        <div className="product-page-container">
            <div className="product-page-main">
                <div className="product-page-image"><img src={data?.data?.images?.[1]} /></div>
                <div className="product-page-content">
                    <h1>{data?.data.title}</h1>
                    <h3>₹ {data?.data.price}</h3>
                    <div className="size-button">{[...Array(6)].map((e,i)=><button>{i+5}</button>)}</div>
                    <div className="product-buttons"><button onClick={changeCart}>{butttontog?"Add to Cart":"Item Added !"}</button><button><AiOutlineHeart/> wishlist</button></div>
                    </div>
            </div>
            {/* <div className="product-page-extra">
            <p>{data?.data.details}</p>
                    <p>{data?.data.descripition}</p>
            </div> */}
        </div>
    );
}
 
export default Product;