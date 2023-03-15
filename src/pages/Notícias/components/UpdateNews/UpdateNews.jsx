import { useContext, useEffect, useState } from "react"
import { Button } from "../../../Login/components/components/Button/Button"
import { CreateNewsContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NotLogin } from "../../../../components/NotLogin/NotLogin";
import { UserContext } from "../../../../context/UserContext";

export function UpdateNews() {
  const {login} = useContext(UserContext)
  const [value, setValue] = useState('')
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')

  const [loading, setLoading] = useState(false)
  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')
  const navigate = useNavigate()
  let data = false

  useEffect(() => {
    async function fetchData() {

      try {
        const response = await axios.get('https://api-paadupfi.onrender.com/news/' + key)
        
        if(!response.ok){
          data = response.ok
          setValue(response.data.news.description)
          setImage(response.data.news.image)
          setTitle(response.data.news.title)
        }
      } catch (error) {
        console.log(error)
      }
     
    }
    fetchData();
  },[])


  function newValue({target}){
    setValue(target.value)
  }

  function newTitle({target}){
    setTitle(target.value)
  }

  function newImg({target}){

    const file = target.files[0]

    if (!file) {
      console.log("Nenhum arquivo selecionado")
      return
    }
  
    if (file.size >  1024 * 1024 * 5) {
      console.log("O arquivo selecionado é muito grande (tamanho máximo de 5 MB)")
      return
    }
  
    if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      console.log("Tipo de arquivo inválido (somente imagens JPEG, PNG e GIF são permitidas)")
      return
    }
  
    setImage(file)
  }

  async function handleSubmit(event){
    event.preventDefault()
    try {
      setLoading(true)
      const formData = new FormData()

      formData.append('title', title)
      formData.append('description', value)
      formData.append('file', image)

      const token = window.localStorage.getItem('Token')

      await axios.patch('https://api-paadupfi.onrender.com/news/' + key, formData, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })

      setLoading(false)
      navigate('/news')
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }


  return (
    <>

    {
      login ? (
      !data ? (
        <>
          <CreateNewsContainer className="container">
            <div>
              <div className="title">
                <h1>Publicação</h1>
              </div>

              <form action="" onSubmit={handleSubmit}>
                <div id="title" >
                  <label htmlFor="title">Título</label>
                  <input type="text" name="title" value={title}  onChange={newTitle} required/>
                </div>

                <div className="images">
                  <label htmlFor="image">Imagem</label>
                  <input type="file" name="image" id="image"  onChange={newImg} title="Mudar imagem?" />
                </div>

                <div className="descriptions">
                  <label htmlFor="description">Descrição</label>
                  <textarea name="description" id="description" cols="30" rows="10"  value={value} onChange={newValue} required></textarea>
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
          </CreateNewsContainer>
        </>
      ) : (
        <>
          Conteúdo não encontrado!
        </>
      )):(
        <NotLogin />
      )
    }

    </>
  )
}