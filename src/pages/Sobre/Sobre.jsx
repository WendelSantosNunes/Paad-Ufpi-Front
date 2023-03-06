import { SobreContainer } from "./styles";
import PaadImg from '../../images/Paad.png'

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

      <div className="google-map-code">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3815441117235!2d-41.43724423522628!3d-7.081689344885593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79c1a843b8a035d%3A0x362c9952b4717405!2sUniversidade%20Federal%20do%20Piau%C3%AD%20-%20Picos!5e0!3m2!1spt-BR!2sbr!4v1678101382670!5m2!1spt-BR!2sbr" width="1000" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </SobreContainer>
  )
}