import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { LoginLostStyle } from "./styles";
import { useForm } from "../../../../Hooks/useForm";
import { useFetch } from "../../../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../../../api";


export function LoginPasswordLost(){

    const email = useForm()
    const { data, loading, error, request } = useFetch()

    async function handleSubmit(event){
        event.preventDefault()

        if(email.validate()){ 
            const {url, options} = PASSWORD_LOST({email: email.value})
            await request(url, options)
        }
    }

    return(
        <section className="container">
            <LoginLostStyle>
                <h1 className="title">RECUPERAÇÃO DE CONTA</h1>

                {
                    data 
                    ? (
                        <p>{data.message}</p> 
                    ):(
                    <form action="" onSubmit={handleSubmit}>

                        <Input label="Email" type="text" name="email" {...email}/>
                        {
                            loading ? (
                                <Button disabled>Carregando...</Button>
                            ) : (
                                <Button>Enviar Email</Button>
                            )
                        }
                    </form>
                    )
                }                

                {error && <p className="error">{error}</p>} 

               
            </LoginLostStyle>
           
        </section>
    )
}