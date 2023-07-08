
import  NewsStyle from '../Styles/NewsStyle.module.css';
import { useEffect, useState } from 'react';
import { NewsType } from '../Types/NewsType';
import { APINews } from '../../Helpers/APInews';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import InnerCarouselNews from '../UI/NewsOutside/innerCarouselNews';
import { Carousel } from 'react-responsive-carousel';
import '../Styles/NewsStyleOut.css';
const News : React.FC = ()=> {
  const [news , setNews] = useState<NewsType>();
  const [width, setWidth] = useState<number>(1560);
  const API = new APINews();
  const load = async()=> {
      const response = await API.getNews();
      setNews(response);
  }
  useEffect(()=> {
   load()
  }, [])
  window.addEventListener( "load", (e)=> {
    setWidth(window.innerWidth)
})
  window.addEventListener( "resize", (e)=> {
      setWidth(window.innerWidth)
  })
    return(<>
       <div id = "section6" className= {NewsStyle.container}>
         <h1 className='some'>НОВОСТИ</h1>
         <div style ={{height : "120px" ,paddingLeft: "40px", paddingRight: "40px"}}>
         <Carousel 
         showIndicators = {false}
         emulateTouch = {true}
         infiniteLoop = {true}
         showThumbs = {false}
         centerMode = {true}
         centerSlidePercentage={ width < 1000 ? 100 : 33}
         >
          {
            news?.content.map((element, index)=> <InnerCarouselNews key={element.id} title= {element.title} text= {element.text} author= {element.author}/>)
          }
         </Carousel>
         </div>
       </div>
    </>)
}
export default News;