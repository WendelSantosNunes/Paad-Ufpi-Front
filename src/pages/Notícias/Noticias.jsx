import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { TodasNoticias } from './components/TodasNoticias/TodasNoticias';
import { Navigate, Route, Routes } from "react-router-dom";
import { NewsID } from "./components/NewsID/NewsID";

export function Noticias(){
  const {login} = useContext(UserContext)

  if(login === true){
    return <Navigate to='/' />
  }else{
      return(
          <>
              <Routes>
                  <Route path="/" element={<TodasNoticias />} />
                  <Route path="/news-id/*" element={<NewsID />} />
              </Routes>
          </>
      )
  }
}