import { BrowserRouter, Navigate, Route, Routes, useRoutes,  } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { GlobalStyles } from "./styles/GlobalStyled"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { UserStorage } from "./context/UserContext"
import { Sobre } from "./pages/Sobre/Sobre"
import { Noticias } from "./pages/Notícias/Noticias"
import { Publicaction } from "./pages/Publication/Publication"
import { Project } from "./pages/Project/Project"
import { Member } from "./pages/Member/Member"
import { NotFound } from "./pages/NotFoud/NotFound"


export function App() {

  return (
    <>
      <GlobalStyles/>    
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/about" element={<Sobre />} />
              <Route path="/news/*index.tsx:90 Uncaught Error: useRoutes() may be used only in the context of a <Router> component." element={<Noticias />} />
              <Route path="/publication/*" element={<Publicaction />} />
              <Route path="/project/*" element={<Project />} />
              <Route path="/member/*" element={<Member />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to='/404' />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}
