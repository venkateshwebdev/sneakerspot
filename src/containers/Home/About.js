import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Aos from "aos";
import "aos/dist/aos.css"

const About = () => {
    const [data,setData] = useState()
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const rawData = await fetch("http://localhost:8000/getabout")
        const resData = await rawData.json()
        console.log(resData)
        setData(resData)
    }
    useEffect(()=>{
        Aos.init({duration:2000,easing:"ease-in-out"})
    },[])
    return ( 
        <div className="about-container">
                        <div>
                <div className="about-head">Top Brands For You</div>
                <div className="about-trending" data-aos="zoom-in">
                    <img src={"https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt7486bb7a2357dbbe/646ceae3a15c658a033d29d3/nikemay.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160"}/>
                    <img src={"https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt75bf3b15c3aae08c/646ceaf3c9c6e238e3299f15/adidasmay.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160"}/>
                    <img src={"https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt4fa8028e057af36f/646ceb0112041606a87c765c/newbalancemay.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160"}/>
                    <img src={"https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltf85fa11097f37b9b/646cea61a15c6524883d29c9/crocsmay.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160"}/>
            </div>
            </div>

            <div>
                <div className="about-trending about-gal" data-aos="zoom-in">
                    
                    <img src={"https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt227316ff2598f358/6491f77a352ac626a8da498a/Summer_Editorial-_Get_up_&_go_slips_onsSecondaryA.jpg?format=jpg&auto=webp&height=438"} />
                    <img src={"https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} height={"438px"} />
                    <img src={"https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2xpcHBlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} height={"438px"} />
                    <img src={"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} height={"438px"} />
                    <img src={"https://images.unsplash.com/photo-1633281651728-b7f0bd1f3eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2xpZGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} height={"438px"} />
                    <img src={"https://images.unsplash.com/photo-1557161187-fba28578f4ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0JTIwc2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} height={"438px"} />
            </div>
            </div>
            <div>
                <div className="about-head">Trending</div>
                <div className="about-trending" data-aos="zoom-in">
                {
                    data?.data.trend.map((e,i)=><ProductCard key={i} home={true} image={e.images?.[1]?e.images[1]:e.images?.[0]}/>)
                }
            </div>
            </div>
                        <div>
                <div className="about-head">Tag us on Social Media</div>
                <p>Using #SneakerSpot to get featured our website</p>
                <div className="about-trending about-gal" data-aos="zoom-in">
                <img src={"https://images.unsplash.com/photo-1594250945177-00a894c9fa06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"} height={"400px"}/>
                    <img src={"https://plus.unsplash.com/premium_photo-1665675242030-54da84ce57c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} height={"400px"}/>
                    <img src={"https://images.unsplash.com/photo-1634080271817-dcd33806ac66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} height={"400px"}/>
                    <img src={"https://images.unsplash.com/photo-1616262877839-ccaabe50b65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} height={"400px"}/>
                    <img src={"https://images.unsplash.com/photo-1640447051222-3023288a492b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} height={"400px"}/>
                    <img src={"https://plus.unsplash.com/premium_photo-1664874602822-91dd10ae6a31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} height={"400px"}/>


            </div>
            </div>
            {/* <div>
                <div className="about-head">adidas</div>
                <div className="about-trending" data-aos="zoom-in">
                {
                    data?.data.adidas.map((e,i)=><ProductCard key={i} home={true} image={e.images?.[1]?e.images[1]:e.images?.[0]} title={e.title} price={e.price}/>)
                }
            </div>
            </div> */}
            {/* <div>
                <div className="about-head">Puma</div>
                <div className="about-trending" data-aos="zoom-in">
                {
                    data?.data.puma.map((e,i)=><ProductCard key={i} home={true} image={e.images?.[1]?e.images[1]:e.images?.[0]} title={e.title} price={e.price}/>)
                }
            </div>
            </div> */}
        </div>
     );
}
 
export default About;