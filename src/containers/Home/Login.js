import { useContext, useState } from "react";
import { Link, Navigate, json, useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";

const Login = () => {
    const navigate = useNavigate()
    const [login,setLogin] = useState(true)
    const [sucess,setSucess] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleLogin = async(e)=>{
        e.preventDefault()
        try{
            const data = await fetch("https://sneakerspotapi.onrender.com/checkuser",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body:JSON.stringify({email,password})
            })
            const odata = await data.json()
            console.log(odata)
            setSucess(odata.data)
            if(odata.code){
                localStorage.setItem("user",email)
                setUser(localStorage.getItem("user"))
                navigate("/")
            }

            
        }
        catch(err){
            console.log("Email or Password is wrong!")
            setSucess("Email or Password is wrong!")
        }
        // return <Navigate replace to="/" />
    }
    const handleRegister = async(e)=>{
        e.preventDefault()
        console.log(login)
        console.log(email,password)
        try{
            const data = await fetch("https://sneakerspotapi.onrender.com/adduser",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body:JSON.stringify({email,password})
            })
            const odata = await data.json()
            console.log(odata)
            setSucess(odata.data)
            navigate("/login")
        }
        catch(err){
            console.log("Email or Password is wrong!")
            setSucess("Something is Wrong")
        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">{login?"Login":"Register"}</h1>
                <div>{sucess}</div>
                <form onSubmit={login?handleLogin:handleRegister}>
                    <label>Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="example@123.com" value={email}/>
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder={login?"password":"Set a Password"} value={password}/>
                    {!login&&<input type="text" placeholder="Confirm Password"/>}
                    {/* <input type="file" /> */}
                    <button>{login?"SignIn":"SignUp"}</button>
                </form>
            </div>
            <div style={{display:"flex",gap:"10px"}}>{!login?"Already a User?":"New Here?"}<Link><div onClick={()=>setLogin(prev=>!prev)} className="register">{!login?"Login":"Register"}</div></Link></div>
        </div>
    );
}
 
export default Login;