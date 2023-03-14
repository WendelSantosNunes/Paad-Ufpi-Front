import { Link } from "react-router-dom";
import { HeaderContainer, Menu1, SocialMedia } from "./styles";
import { InstagramLogo, YoutubeLogo } from 'phosphor-react'
import Logo from '../../images/Logo.svg'
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { slide as Menu } from 'react-burger-menu'

export function Header(){
    const {data, userLogout} = useContext(UserContext)

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (event) => {
        event.preventDefault()
        console.log("oi")
        setMenuOpen(!menuOpen);
    }

    var styles = {
       
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '100px'
        },

        bmBurgerBars: {
          background: '#eee'
          
        },

        bmBurgerBarsHover: {
          background: '#a90000'
        },

        // bmCrossButton: {
        //   height: '24px',
        //   width: '24px'
        // },

        // bmCross: {
        //   background: '#bdc3c7'
        // },

        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
          width: '100%'
        },

        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        
        bmItemList: {
          color: '#EEE',
          padding: '0.8em',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px'
        },

        bmItem: {
            color: '#EEE',
            fontSize: '40px'
        },

        // bmItem:hover  {
        //     color: 'red',
        // },

        bmOverlay: {
            display: 'none'

        }
      }

    return (
        <HeaderContainer >
            <SocialMedia>
                <div  className={`container ${menuOpen ? 'active' : ''}`}>
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
            <Menu1  className={`${menuOpen ? 'active' : ''}`}>
                <div className="container">
                    <div>
                        <Link to='/'>
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <nav className="menus">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>Sobre</Link>
                        <Link to='/news'>Notícias</Link>
                        <Link to='/publication'>Publicação</Link>
                        <Link to='/project'>Projeto</Link>
                        <Link to='/member'>Membros</Link>

                        {data ? (
                            <button onClick={userLogout}>Sair</button>
                        ):(
                            <Link to='/login'>Login</Link> 
                        )}
                    </nav>
                </div>
            </Menu1>
           
            <div className="menuHamburguer" onClick={handleMenuClick}>
                <Menu styles={styles} >
                    <Link to='/'>Home</Link>
                    <Link to='/about'>Sobre</Link>
                    <Link to='/news'>Notícias</Link>
                    <Link to='/publication'>Publicação</Link>
                    <Link to='/project'>Projeto</Link>
                    <Link to='/member'>Membros</Link>
                </Menu>
             </div>
        </HeaderContainer>
    )
}