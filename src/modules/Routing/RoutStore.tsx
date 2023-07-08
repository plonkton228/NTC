import App from "../../App";
import { useAppSelector } from "../../hooks/redux";
import AdminPanel from "../Lists/AdminPanel";
import Auto from "../Lists/Auto";
import Services from "../Lists/Offer";
import { RoutStoreTemplate } from "../Templates/RoutStoreTemplate";
import AboutUsUiUpdate from "../UI/About/AboutUsUiUpdate";
import UiFilesCreate from "../UI/Files/UiFilesCreate";
import UiFilesUpdate from "../UI/Files/UiFilesUpdate";
import UiFranUpdate from "../UI/Fran/UiFranUpdate";
import UiNewsUpdate from "../UI/News/UiNewEdit";
import UiNewsCreate from "../UI/News/UiNewsCreate";
import UiOfferCreate from "../UI/Offers/UiOfferCreate";
import UiOfferInner from "../UI/Offers/UiOfferInner";
import UiOfferInnerChild from "../UI/Offers/UiOfferInnerChild";
import UiOfferUpdate from "../UI/Offers/UiOfferUpdate";
import UiSubOfferCreate from "../UI/Offers/UiSubOfferCreate";
import UiSubOfferUpdateDelete from "../UI/Offers/UiSubOfferUpdateDelete";
// Хранилище роутов. Для добавления нового роута добавляем очередной обьект в массив.



function RoutStore () :RoutStoreTemplate [] {
    const {isAuto} = useAppSelector(state => state.userReducer)
  const AutoStore: RoutStoreTemplate [] = [{path: "/services/:id", element: <Services/> },{path: "/", element: <App/>}, {path: "/offer/:id", element: <UiOfferInner/>},
  {path: "/offer/:id/child/:id", element : <UiOfferInnerChild/>}, {path : "/admin", element: <AdminPanel/>},{path : "/admin/offer", element: <UiOfferCreate/>}, {path : "/admin/offer/:id", element: <UiOfferUpdate/>}, {path: '/admin/offer/:id/subofferCreate', element : <UiSubOfferCreate/>},
 {path : "/admin/offer/subofferUpdateDelete/:id", element : <UiSubOfferUpdateDelete/>}, {path: "/admin/news/:id", element: <UiNewsUpdate/>}, {path: "/admin/news/create" , element : <UiNewsCreate/>}, {path : '/admin/file/create', element : <UiFilesCreate/>}, {path : '/admin/about/create', element : <AboutUsUiUpdate/>},{path: "/admin/file/:id/update", element : <UiFilesUpdate/>}, {path : "/admin/franchises", element : <UiFranUpdate/>}]

 const UnAutoStore : RoutStoreTemplate [] = [{path: "/services/:id", element: <Services/> },{path: "/", element: <App/>}, {path: "/offer/:id", element: <UiOfferInner/>},
 {path: "/offer/:id/child/:id", element : <UiOfferInnerChild/>}, {path: "/auto", element : <Auto/>},{path: "/admin/file/:id/update", element : <UiFilesUpdate/>}]

 if(isAuto) {
    return AutoStore
 }else {
    return UnAutoStore
 }
}
export default RoutStore