import { useState } from "react"
import { Button } from "../../../Login/components/components/Button/Button"
import { ContainerCreatePublication } from "./styles"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreatePublication(){
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState('')
  const [linkPublication, setLinkPublication] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault()
    
    try {
      setLoading(true)
      // if(title.value !== '' || value !== '' || image !== ''){
      //   return "Error"
      // }

      const token = window.localStorage.getItem('Token')

      await axios.post('https://api-paadupfi.onrender.com/publication/', {link:linkPublication, description}, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })

      setLoading(false)
      
      navigate('/publication')
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  function handleLink({target}){
    setLinkPublication(target.value)
  }

  function handleDescription({target}){
    setDescription(target.value)
  }

  return(
    <>
      <ContainerCreatePublication className="container">
        <div>
          <div className="title">
            <h1>Publicação</h1>
          </div>

          <form action="" onSubmit={handleSubmit}>

            <div className="descriptions">
              <label htmlFor="description">Descrição</label>
              <textarea name="description" id="description" cols="30" rows="10" onChange={handleDescription} required></textarea>
            </div> 

            <div className="link">
              <label htmlFor="link">Link</label>
              <input type="text" name="link"  id="link" onChange={handleLink} required/>
            </div>
            
            {
              loading ? (
                <Button disabled className="ButtoNews">Carregando...</Button>
              ) : (
                <Button className="ButtoNews">Enviar</Button>
              )
            }
          </form>
        </div>
      </ContainerCreatePublication>
    </>
  )
}