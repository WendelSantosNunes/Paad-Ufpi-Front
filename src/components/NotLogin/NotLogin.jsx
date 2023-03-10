import { NotLoginContainer } from "./styles";
import imageNotLogin from '../../images/NotLogin.svg'

export function NotLogin(){
  return <>
    <NotLoginContainer className="container">
      <div>
        <img src={imageNotLogin} alt="" />
        <p>Você não tem permissão para acessar essa página.</p>
      </div>
    </NotLoginContainer>
  </>
}