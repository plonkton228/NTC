import { useState } from "react"
import { UserI } from "../Types/UserI"
import { useAppDispatch } from "../../hooks/redux"
import { authUser } from "../../store/actions/reducers/userReducer"
import { useNavigate } from "react-router-dom"
import AutoStyle from '../Styles/Auto.module.css'
const Auto : React.FC = ()=> {
    const [user, setUser] = useState<UserI>({username: "", password: ""})
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const Autorez = async ()=> {
        await dispatch(authUser(user));
        navigate('/admin');
    }
    return(<>
    <div className= {AutoStyle.container}>
        <div className= {AutoStyle.AutoContainer}>
            <h1 className= {AutoStyle.h1c}>Авторизация</h1>
            <div>
             <input className= {AutoStyle.inputCustom} value={user?.username} onChange={(e)=> setUser({...user,username : e.target.value})} placeholder="Логин"></input>
             <input type = "password" className= {AutoStyle.inputCustom} value={user?.password} onChange={(e)=> setUser(({...user, password:e.target.value}))} placeholder="Пароль"></input>
            </div>
            <button className= {AutoStyle.btnAuto} onClick={()=> Autorez()}>Авторизироваться</button>
        </div>
    </div>
    
    </>)
}
export default Auto