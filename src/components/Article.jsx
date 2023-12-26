import {  useNavigate, useParams } from "react-router-dom";
import useArticle from "../../hooks/useArticle";
import Loading from "./Loading";

export default function Article() {
  const {teamId,articleId} = useParams()
 const navigate = useNavigate()
   const {response:article ,loading}= useArticle({teamId,articleId})
   if(loading){
   return <Loading/>
   }
  if(!article){
    navigate(`/${teamId}`)
  }
return (
    <div className="grid place-content-center">
      <h2 className=" text-cyan-500 mt-16 text-center text-5xl">{article.title}</h2>
      <p className="mt-6 w-[62ch] text-lg leading-8  text-cyan-200">{article.body}</p>
    </div>
    
)
    
 
}
