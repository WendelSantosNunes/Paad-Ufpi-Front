import { createContext, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TOKEN_POST, USER_GET } from "../api"

export const UserContext = createContext()

export function UserStorage({children}) {
    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const userLogout = useCallback(async function userLogout(){
        setData(null)
        setError(null)
        setLogin(false)
        window.localStorage.removeItem('Token')
        navigate('/login/')    
    },[navigate])

    async function getUser(token){
        
        const {url, options} = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json()
        
        // Adicionando os dados do admin logado a um estado
        setData(json)
        setLogin(true)

    }

    async function userLogin(email, password){
        try {
            setError(null)
            setLogin(false)
            setLoading(true)

            const {url, options} = TOKEN_POST({email: email.value,password: password.value})
            const tokenRes = await fetch(url, options)
            
            if(!tokenRes.ok) {
                throw new Error(`Error: Email ou senha inválido`)
            }else{
                setLogin(true)

                const {token} = await tokenRes.json()
                
                window.localStorage.setItem('Token', token)
                
                await getUser(token)
                navigate('/')
            } 
            
        } catch (error) {
            setError(error.message)
            setLogin(false)
        } finally {
            setLoading(false)
        }
    
    }

    //  Quando inicializar o site
    useEffect(() => {
        async function autoLogin(){
            const token = window.localStorage.getItem('Token')           
            if(token){
                try {
                    setError(null)
                    setLoading(true)
                    
                    await getUser(token)
                    
                } catch (error) {
                    userLogout()
                    navigate('/login/')    
                } finally{
                    setLoading(false)
                }
            }
        }

        autoLogin()
    }, [userLogout])
    
    return (
        <UserContext.Provider value={{userLogin, userLogout, data, error, loading, login}}>
            {children}
        </UserContext.Provider>
    )
}