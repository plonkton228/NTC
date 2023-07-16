import ClientsSetyle from '../Styles/ClinetsStyle.module.css';
interface UiOfferTemplate {
    way : string,
   
}
const UiClients: React.FC<UiOfferTemplate>  = ({way})=> {
  return(<>
      <div className= {ClientsSetyle.blockClient}><img alt="" className= {ClientsSetyle.imgc} src = {`${way}`}/></div>
  </>)
}
export default UiClients;