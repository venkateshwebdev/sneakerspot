import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import { LazyLoadImage } from 'react-lazy-load-image-component'
const ProductCard = (props) => {

    return (
        <div className={`product-container ${props.home&&"homeproduct"}`}>
            <div style={{position:"absolute",right:"10%",top:"5%"}}><AiOutlineHeart color="grey" fontSize={"20px"}/></div>
            <div><LazyLoadImage
      effect="blur"
      className="imgdiv"
      src={props.image}
      alt="Lazy Loaded Image"
    /></div>
            <div>
            <div className="product-title">{props.title}</div>
            <p>₹ {props.price}</p>
            </div>
        </div>
    );
}
 
export default ProductCard;