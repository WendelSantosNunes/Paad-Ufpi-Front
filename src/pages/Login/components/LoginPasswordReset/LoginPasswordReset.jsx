import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { LoginResetStyle } from "./styles";
import { useForm } from "../../../../Hooks/useForm";
import { useFetch } from "../../../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../../../api";
import { useState } from "react";
import { useEffect } from "react";


export function LoginPasswordReset(){

    const senha = useForm()
    const { data, loading, error, request } = useFetch()
    // const [login, setLogin] = useState('')
    const [key, setKey] = useState('')


    useEffect(()=> {
        const params = new URLSearchParams(window.location.search)
        const key = params.get('key')

        if(key){
            setKey(key)
        }
    },[])


    async function handleSubmit(event){
        event.preventDefault()

        if(senha.validate()){ 
            const {url, options} = PASSWORD_RESET({currentPass: senha.value}, key)
            const json = await request(url, options)
            console.log(json)
        }
    }
    
    return(
        <section className="container">
             <LoginResetStyle>
                 <h1 className="title">INSIRA A NOVA SENHA</h1>

                 {
                    data 
                    ? (
                        <p>{data.message}</p> 
                    ):(
                    <form action="" onSubmit={handleSubmit}>

                        <Input label="Senha" type="text" name="senha" {...senha}/>
                        {
                            loading ? (
                                <Button disabled>Carregando...</Button>
                            ) : (
                                <Button>Enviar</Button>
                            )
                        }
                    </form>
                    )
                }                

                {error && <p className="error">{error}</p>}  

               
             </LoginResetStyle>
           
        </section>
    )
}