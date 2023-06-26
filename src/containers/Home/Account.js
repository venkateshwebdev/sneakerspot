import { useContext } from "react";
import { AiOutlineHeart, AiOutlineLogout, AiOutlineOrderedList } from "react-icons/ai";
import { GiCartwheel, GiShoppingBag, GiShoppingCart } from "react-icons/gi";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";

const Account = () => {
    const {setUser} = useContext(UserContext)
    return (
        <div className="account-container">
            <div className="account-ele">
                <button><Link>{<AiOutlineHeart />}WishList</Link></button>
                <button><Link to="/cart">{<GiShoppingCart />}Cart</Link></button>
                <button><Link>{<GiShoppingBag/>}Orders</Link></button>
                <button onClick={()=>setUser("")}><Link>{<AiOutlineLogout/>}Logout</Link></button>
                </div>
        </div>
    );
}
 
export default Account;