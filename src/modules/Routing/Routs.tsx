import { Routes, Route } from "react-router-dom"
import  RoutStore  from "./RoutStore"


// Итерация по хранилищу роутов
const Routs: React.FC = ()=> {
    
    return(<>
     
         <Routes>
            {
                RoutStore().map((element)=> <Route key = {element.path} path={element.path} element={element.element}/>)
            }
         </Routes>
        </>)
}
export default Routs