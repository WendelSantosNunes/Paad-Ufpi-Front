import { TodasNoticias } from './components/TodasNoticias/TodasNoticias';
import { Route, Routes } from "react-router-dom";
import { NewsID } from "./components/NewsID/NewsID";
import { CreaterNews } from './components/CreateNews/CreateNews';
import { UpdateNews } from './components/UpdateNews/UpdateNews';

export function Noticias(){

 return(
    <>
      <Routes>
        <Route path="/" element={<TodasNoticias />} />
        <Route path="/news-id/*" element={<NewsID />} />
        <Route path="/create-news" element={<CreaterNews />} />
        <Route path="/update-news/*" element={<UpdateNews />} />
      </Routes>
    </>
  )
}