import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";

const Shop = () => {
    const [data,setData] = useState()
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const rawData = await fetch("https://sneakerspotapi.onrender.com")
        const resData = await rawData.json()
        setData(resData.data)
        console.log(resData)
        console.log(data)
    }
    return (
        <div className="shop-container">
            <div className="shop-head">
                <h1>Sneakers</h1>
                <p>lorem ipsum de armit sit do meret to elpasino marico de andate anukmko</p>
            </div>
            <div className="shop-body">
            <div className="shop-filter">
                <p>Nike</p>
                <p>Puma</p>
                <p>Adidas</p>
            </div>
            <div className="shop-main">
                {
                data?.map((e,i)=><ProductCard key={i} id={e._id} image={e.images?.[1]} title={e.title} price={e.price}/>)
                }
            </div>
            </div>
        </div>
    );
}
 
export default Shop;