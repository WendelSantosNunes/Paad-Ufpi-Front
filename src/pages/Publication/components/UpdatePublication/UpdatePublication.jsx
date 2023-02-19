import { useEffect, useState } from "react"
import { Button } from "../../../Login/components/components/Button/Button"
import { ContainerCreatePublication } from "./styles"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function UpdatePubliation(){
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState('')
  const [linkPublication, setLinkPublication] = useState('')
  const navigate = useNavigate()
 
  let data = false
  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')

  async function fetchData() {

    try {

      const response = await axios.get('https://api-paadupfi.onrender.com/publication/' + key)
      
      if(!response.ok){
        data = response.ok
        setDescription(response.data.student.description)
        setLinkPublication(response.data.student.link)
      }
    } catch (error) {
      console.log(error)
    }
   
  }


  useEffect(() => {
    fetchData();
  },[])


  async function handleSubmit(event){
    event.preventDefault()
    
    try {
      setLoading(true)

      const token = window.localStorage.getItem('Token')
    
      await axios.patch('https://api-paadupfi.onrender.com/publication/' + key, {link:linkPublication, description}, {
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
            <h1>Notícia</h1>
          </div>

          <form action="" onSubmit={handleSubmit}>

            <div className="descriptions">
              <label htmlFor="description">Descrição</label>
              <textarea name="description" id="description" cols="30" rows="10" onChange={handleDescription}  value={description} required></textarea>
            </div> 

            <div className="link">
              <label htmlFor="link">Link</label>
              <input type="text" name="link"  id="link" onChange={handleLink} value={linkPublication} required/>
            </div>
            
            {
              loading ? (
                <Button disabled className="ButtoNews">Carregando...</Button>
              ) : (
                <Button className="ButtoNews">Atualizar</Button>
              )
            }
          </form>
        </div>
      </ContainerCreatePublication>
    </>
  )
}