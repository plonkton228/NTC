import { MemoryRouter } from "react-router-dom"
import Routs from "../../modules/Routing/Routs"

const renderWithRouter = (component : React.ReactElement, initialEntries : string = '/')=> {
       return(
        <MemoryRouter initialEntries={[initialEntries]}>
            <Routs/>
            {component}
        </MemoryRouter>
       )
}
export default renderWithRouter