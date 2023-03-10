import { NoutFoundContainer } from "./styles";

import { useNavigate } from 'react-router-dom';

export function NotFound() {

  const navigate = useNavigate();

  function goHome(){
    navigate('/');
  };

  return(
    <>
      <NoutFoundContainer className="container">

        <h1>Oops... Essa página não existe.</h1>
        
        <p>Retorne para Página Inicial no nosso site clicando no botão abaixo</p>
            
        <button onClick={goHome}>
          Clique aqui
        </button>

      </NoutFoundContainer>
    </>
  )
}