import { Link } from "react-router-dom";
import { HeaderContainer, Menu1, SocialMedia } from "./styles";
import { InstagramLogo, YoutubeLogo } from 'phosphor-react'
import Logo from '../../images/Logo.svg'
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import imageMenu from '../../images/menu.svg'

export function Header(){
    const {data, userLogout} = useContext(UserContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick(event){
        event.preventDefault()
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <HeaderContainer >
          <SocialMedia>
                <div  className='container'>
                    <a href = "mailto:paad@ufpi.edu.br" className="email">paad@ufpi.edu.br</a>
                    <div>
                        <a href="https://www.instagram.com/paad.lab/" target="_blank">
                            <InstagramLogo size={32} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCc1FpLC3oiJvsoh1sDJtk2g" target="_blank">
                            <YoutubeLogo size={32} />
                        </a>
                    </div>
                </div>
          </SocialMedia>
          <Menu1 className="container">
            <nav className="navbar">
              <Link to='/' className="logo">
                <img src={Logo} alt="Logo" />
              </Link>
        
              <input type="checkbox" id="toggler" />

              <label htmlFor="toggler">
                <i className="ri-menu-line" onClick={handleMenuClick}>
                  <img src={imageMenu} alt="menu" />
                </i>
              </label>
              
              <div className={isMenuOpen ? 'menu' : 'menuClose'}>
                <ul className="list">
                  <li onClick={handleMenuClick}><Link to='/'>Home</Link></li>
                  <li onClick={handleMenuClick}><Link to='/about'>Sobre</Link></li>
                  <li onClick={handleMenuClick}><Link to='/news'>Notícias</Link></li>
                  <li onClick={handleMenuClick}><Link to='/publication'>Publicação</Link></li>
                  <li onClick={handleMenuClick}><Link to='/project'>Projetos</Link></li>
                  <li onClick={handleMenuClick}><Link to='/member'>Membros</Link></li>

                  {data ? (
                    <li onClick={userLogout} className='buttonClick'><a href="#">Sair</a></li>
                  ):(
                     <li onClick={handleMenuClick}><Link to='/login'>Login</Link></li> 
                  )}
                </ul>  
              </div>
            </nav>
          </Menu1>
        </HeaderContainer>
    )
}