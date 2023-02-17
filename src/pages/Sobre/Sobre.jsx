import { SobreContainer } from "./styles";
import PaadImg from '../../images/Paad.png'
import MapaImg from '../../images/Mapa.png'

export function Sobre(){

  return (
    <SobreContainer className="container" >
      
      <h1>Sobre</h1>
      
      <div>
        <p>
          O PAAD, cadastrado no Diretório de Grupos do CNPq, é composto por pesquisadores docentes e discentes (graduação e pós-graduação) da Universidade Federal do Piauí (UFPI), no Campus Senador Helvídio Nunes de Barros (CSHNB) em Picos-PI. Desde sua criação em 2018, os pesquisadores membros trabalham em projetos de iniciação científica, iniciação tecnológica, trabalhos de conclusão de curso e dissertações de mestrado.
        </p>

        <img src={PaadImg} alt="Imagem do laboratório" />
      </div>

      <h2>Localização</h2>

      <a href="https://www.google.com/maps/search/UFPI/@-7.0816893,-41.4372442,17z/data=!3m1!4b1" target="_blank">      
        <img src={MapaImg} alt="Imagem do mapa da localização do  PAAD" />
      </a>

    </SobreContainer>
  )
}