import { FooterContainer, FooterDiv } from "./styles";
import { InstagramLogo, YoutubeLogo, MapPin, EnvelopeSimple, Phone } from 'phosphor-react'
import Ufpi from '../../images/ufpi.png'

export function Footer(){
    return (
        <FooterContainer>
            <div className="container">
                <FooterDiv>
                   <div>
                        <h3>Apoio</h3>
                        
                        <a href="https://ufpi.br/" target="_blank">
                            <img src={Ufpi} alt="UFPI" />
                        </a>
                   </div>
                   <div>
                        <h3>Contato</h3>
                        <div>   
                            <a href="tel:+5589999999999" target="_blank">
                                <Phone size={32} />
                                <p>(89) 99999-9999</p>
                            </a>
                        </div>
                        <div>
                            <a href = "mailto:paad@ufpi.edu.br" className="email">
                                <EnvelopeSimple size={32} />
                                paad@ufpi.edu.br
                            </a>
                        </div>
                        <div>
                            <a href = "https://www.google.com/search?q=Universidade+Federal+do+Piau%C3%AD+-+Picos&tbm=lcl&sxsrf=AJOqlzXqPOwz4GIrf8TJ1YuqzH4jVuV3yg%3A1676085568643&ei=QAnnY-f7JqjY1sQP6dyGsAo&ved=0ahUKEwjnm7qnwYz9AhUorJUCHWmuAaYQ4dUDCAk&uact=5&oq=Universidade+Federal+do+Piau%C3%AD+-+Picos&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAMyCQgAEBYQHhDxBDICCCY6BAgjECdQiQNYiQNghQhoAHAAeACAAfUBiAGPBZIBBTAuMS4ymAEAoAECoAEBwAEB&sclient=gws-wiz-local">
                                <MapPin size={32} />
                                Picos-PI
                            </a>
                        </div>
                   </div>
                   <div>
                        <h3>Redes Sociais</h3>
                        <div className="social">
                            <a href="https://www.instagram.com/paad.lab/" target="_blank">
                                <InstagramLogo size={32} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCc1FpLC3oiJvsoh1sDJtk2g" target="_blank">
                                <YoutubeLogo size={32} />
                            </a>
                        </div>
                   </div>
                </FooterDiv>
            </div>
        </FooterContainer>
    )
}