import NewsStyle from '../../Styles/NewsStyle.module.css'
interface InnerNewsTemplate {
    title : string,
    text : string,
    author : string,

}

const InnerCarouselNews : React.FC<InnerNewsTemplate> = ({title,text,author})=> {
 return(<>
  <div className= {NewsStyle.innerContainer}>
    <h1>{title}</h1>
    <div style={{whiteSpace : "pre-line"}}>{text}</div>
    <p>Автор: {author}</p>
  </div>
 </>)
}
export default InnerCarouselNews;