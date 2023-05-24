import { Link, useNavigate } from "react-router-dom"
interface TestListT {
    id : number
}
const TestList : React.FC <TestListT>  = ( {id})=> {
    const navigate = useNavigate()
    const handleclick = ()=> {
        navigate(`/offer/${1}`)
    }
    return (<>
     <div data-testid = "TestListDiv"> 
        <p>Это тест</p>
        <button data-testid = {`buttonGetOfferInner`} onClick={ ()=> handleclick()} >ПОДРОБНЕЕ</button>
     </div>
    </>)
}
export default TestList