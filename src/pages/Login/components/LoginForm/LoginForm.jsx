import { LoginStyle } from "./styles";
import Login1 from '../../../../images/login1.png'
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "../../../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../../../api";
import { useEffect } from "react";

export function LoginForm() {

    const email = useForm('email')
    const password = useForm()

    // Tenho que criar uma rota para pegar o dados do admin no front e back
    async function getUser(token){
        
        console.log(token)

        const {url, options} = USER_GET(token)
        console.log(url, options)

        const response = await fetch(url,options)
        const json = await response.json()

        console.log(json)
    }
    
    // Quando inicializar o site
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token){
            getUser(token)
        }
    }, [])

    async function handleSubmit(event){
        event.preventDefault()
        // Só vamos a requisição se os dois forem válidos
        if(email.validate() && password.validate()){
            
            const {url, options} = TOKEN_POST({
                email: email.value, 
                password: password.value
            })

            const response = await fetch(url,options)
            const json = await response.json()

            window.localStorage.setItem('Token', json)
            
            getUser(json.token)
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
                                <div className="linkPassword">
                                    <Link to='password'>Esqueceu sua senha? </Link>
                                </div>
                                <Button>Entrar</Button>
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