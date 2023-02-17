import { LoginStyle } from "./styles";
import Login1 from '../../../../images/login1.png'
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "../../../../Hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

export function LoginForm() {

    const email = useForm('email')
    const password = useForm()
    const {userLogin, error, loading} = useContext(UserContext)    
    
    async function handleSubmit(event){
        event.preventDefault()

        // Só vamos a requisição se os dois forem válidos
        if(email.validate() && password.validate()){    
            userLogin(email, password)
        }
    }


    return (
        <>
            <section className="container" onSubmit={handleSubmit}>
                <LoginStyle>
                    <div className="containerForm">
                        <div>
                            <h2>Bem vindo de volta</h2>
                            <h1>Faça login na sua conta</h1>

                            <form action="">
                                <Input label="Email" type="text" name="email" {...email}/>
                                <Input label="Senha" type="password" name="password" {...password}/>
                                {error && <p className="error">{error}</p>}

                                <div className="linkPassword">
                                    <Link to='password'>Esqueceu sua senha? </Link>
                                </div>
                                {
                                    loading ? (
                                        <Button disabled>Carregando...</Button>
                                    ) : (
                                        <Button>Entrar</Button>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                    <div>
                        <img src={Login1} alt="Imagem ilustrativa" />
                    </div>
                </LoginStyle>
            </section>
        </>
    )
}