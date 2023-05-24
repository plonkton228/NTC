import App from "../../App";
import AdminPanel from "../Lists/AdminPanel";
import Services from "../Lists/Offer";
import TestList from "../Lists/TestList";
import { RoutStoreTemplate } from "../Templates/RoutStoreTemplate";
import UiOfferInner from "../UI/UiOfferInner";
import UiOfferInnerChild from "../UI/UiOfferInnerChild";
// Хранилище роутов. Для добавления нового роута добавляем очередной обьект в массив.


export const RoutStore: RoutStoreTemplate [] = [{path: "/services/:id", element: <Services/> },{path: "/", element: <App/>}, {path: "/offer/:id", element: <UiOfferInner/>},
 {path: "/offer/:id/child/:id", element : <UiOfferInnerChild/>}, {path : "/admin", element: <AdminPanel/>}, {path : "/test" , element : <TestList id = {1}/>}]