import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { GlobalStyles } from "./styles/GlobalStyled"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { UserStorage } from "./context/UserContext"
import { Sobre } from "./pages/Sobre/Sobre"
import { Noticias } from "./pages/Notícias/Noticias"

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
            <Route path="/news" element={<Noticias />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>

  )
}
