import { Link } from "react-router-dom";
import { HeaderContainer, Menu, SocialMedia } from "./styles";
import { InstagramLogo, YoutubeLogo } from 'phosphor-react'
import Logo from '../../images/Logo.svg'
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export function Header(){
    const {data, userLogout} = useContext(UserContext)

    return (
        <HeaderContainer >
            <SocialMedia>
                <div className="container">
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
            <Menu>
                <div className="container">
                    <div>
                        <Link to='/'>
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <nav>
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
            </Menu>
        </HeaderContainer>
    )
}