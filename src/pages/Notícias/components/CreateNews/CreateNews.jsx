import { useContext, useState } from "react"
import { useForm } from "../../../../Hooks/useForm"
import {Input} from "../Input/Input"
import {Button} from "../../../Login/components/components/Button/Button"

import axios from "axios";
import { CreateNewsContainer } from "./styles";
import { useNavigate} from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import { NotLogin } from "../../../../components/NotLogin/NotLogin";

export function CreaterNews() {
  const title = useForm()
  const {login} = useContext(UserContext)
  const [value, setValue] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function newValue({target}){
    setValue(target.value)
  }

  function newImg({target}){

    const file = target.files[0]

    if (!file) {
      setError("Nenhum arquivo selecionado")
      return
    }
  
    if (file.size >  1024 * 1024 * 5) {
      setError("O arquivo selecionado é muito grande (tamanho máximo de 5 MB)")
      return
    }
  
    if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      setError("Tipo de arquivo inválido (somente imagens JPEG, PNG e GIF são permitidas)")
      return
    }
    setError('')
    setImage(file)
  }

  async function handleSubmit(event){
    event.preventDefault()
    try {
      setLoading(true)
      const formData = new FormData()

      console.log('1',title.value, value, image)

      formData.append('title', title.value)
      formData.append('description', value)
      formData.append('file', image)
    
      const token = window.localStorage.getItem('Token')

      if(error === ''){
        const response = await axios.post('https://api-paadupfi.onrender.com/news', formData, {
          headers: {
            Authorization: 'Bearer ' + token,
          }
        })
        
        setLoading(false)
        navigate('/news')
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <>   
      {
        login ? (
          <CreateNewsContainer className="container">
            <div>
              <div className="title">
                <h1>Notícia</h1>
              </div>
    
              <form action="" onSubmit={handleSubmit}>
                <Input label="Título" type="text" name="title" id="title" {...title} required/>
    
                <div className="images">
                  <label htmlFor="image">Imagem</label>
                  <input type="file" name="image" id="image" onChange={newImg} required />

                  <p className="error">{error}</p>
                </div>
    
                <div className="descriptions">
                  <label htmlFor="description">Descrição</label>
                  <textarea name="description" id="description" cols="30" rows="10"  value={value} onChange={newValue} required></textarea>
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
          </CreateNewsContainer>
        ) : (
          <NotLogin />
        )
      }
    </>
  )
  
}