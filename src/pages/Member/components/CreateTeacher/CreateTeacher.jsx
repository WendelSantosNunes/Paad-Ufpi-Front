import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { Button } from "../Button/Button";
import { ContainerCreateTeacher } from "./styles";
import { useNavigate } from "react-router-dom";
import { NotLogin } from "../../../../components/NotLogin/NotLogin";
import { UserContext } from "../../../../context/UserContext";

export function CreateTeacher() {
  const {login} = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [selectedCourses, setSelectedCourses] = useState('');
  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
 
  const navigate = useNavigate()

  async function handleSubmit(event){
    setLoading(true)

    event.preventDefault()

    const formData = new FormData()

    const token = window.localStorage.getItem('Token')

    formData.append('course', selectedCourses)
    formData.append('email', email)
    formData.append('image', image)
    formData.append('fullName', fullName)
    

    if(fullName != '' && image != '' && selectedCourses != '' && email != ''){
      try {
        await axios.post('https://api-paadupfi.onrender.com/teacher/', formData, {
          headers: {
            Authorization: 'Bearer ' + token,
          }
        })

        setLoading(false)
        navigate('/member')

      }catch(error){
        console.log(error)
        setLoading(false)
      }
    }
  }

  function handleFullName({target}){
    setFullName(target.value)
  }

  function handleImage({target}){

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

  function handleCourses({target}){
    setSelectedCourses(target.value);
  }

  function handleEmail({target}){
    setEmail(target.value)
  }

  return(
    <>
      {
        login ? (
          <ContainerCreateTeacher className="container">
            <div>
              <div className="title">
                <h1>Pesquisadores</h1>
              </div>

              <form action="" onSubmit={handleSubmit}>

                <div className="forms">
                  <label htmlFor="fullName">Nome Completo</label>
                  <input type="text" name="fullName" id="fullName" value={fullName} onChange={handleFullName} required/>
                </div>

                <div className="images">
                  <label htmlFor="image">Imagem</label>
                  <input type="file" name="image" id="image" onChange={handleImage} required />
                </div>

                <div className="forms">
                  <label htmlFor="category">Cursos</label>
                  
                  <select name="select" value={selectedCourses} onChange={handleCourses} required>
                  <option value="">Selecione uma opção</option>
                    <option value="Administração">Administração</option>
                    <option value="Biologia">Biologia</option>
                    <option value="Enfermagem">Enfermagem</option>
                    <option value="História">História</option>
                    <option value="Medicina">Medicina</option>
                    <option value="Nutrição">Nutrição</option>                
                    <option value="Sistema de Informação">Sistema de Informação</option> 
                  </select>
                </div>

                <div className="forms">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" onChange={handleEmail} required/>
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
          </ContainerCreateTeacher>
        ):(
          <NotLogin />
        )
      }
    </>
  )
}