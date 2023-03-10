import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { ContainerCreateTeacher } from "./styles";
import { useNavigate } from "react-router-dom";

export function UpdateTeacher() {

  const [loading, setLoading] = useState(false)
  const [selectedCourses, setSelectedCourses] = useState('');
  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [haveImage, setHaveImage] = useState(0)
  const [students, setStudent] = useState([])
  const [teacher, setTeacher] = useState()
  const navigate = useNavigate()

  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')

  async function handleSubmit(event){
    setLoading(true)

    event.preventDefault()
    
    console.log(fullName, image, selectedCourses, email)

    const formData = new FormData()

    const token = window.localStorage.getItem('Token')
    let response 

    formData.append('course', selectedCourses)
    formData.append('email', email)
    formData.append('image', image)
    formData.append('fullName', fullName)
    formData.append('students', students)

    try {
      if(haveImage == 1){
        response = await axios.patch('https://api-paadupfi.onrender.com/teacher/' + key, formData, {
          headers: {
            Authorization: 'Bearer ' + token,
          }
        })
      }else{
        response = await axios.patch('https://api-paadupfi.onrender.com/teacher/update/' + key, {
          course: selectedCourses,
          email: email,
          image: image,
          fullName: fullName,
          students: students 
        }, {
          headers: {
            Authorization: 'Bearer ' + token,
          }
        })
      }

      console.log(response)
      setLoading(false)
      navigate('/member')
    }catch(error){
      console.log(error)
      setLoading(false)
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
    setHaveImage(1)
  }

  function handleCourses({target}){
    setSelectedCourses(target.value);
  }

  function handleEmail({target}){
    setEmail(target.value)
  }

  async function data(){
    try {
      const response = await axios.get(`https://api-paadupfi.onrender.com/teacher/${key}`)
      

      setFullName(response.data.teacher.fullName)
      setSelectedCourses(response.data.teacher.course)
      setEmail(response.data.teacher.email)
      setStudent(response.data.teacher.students)
      setTeacher(response.data)
      setImage(response.data.teacher.image)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    data()
  },[])

  return(
    <>
      <ContainerCreateTeacher className="container">
        <div>
          <div className="title">
            <h1>Atualização de Dados</h1>
          </div>

          <form action="" onSubmit={handleSubmit}>

            <div className="forms">
              <label htmlFor="fullName">Nome Completo</label>
              <input type="text" name="fullName" id="fullName" value={fullName} onChange={handleFullName} required/>
            </div>

            <div className="images">
              <label htmlFor="image">Imagem</label>
              <input type="file" name="image" id="image" onChange={handleImage} />
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
              <input type="text" name="email" id="email" value={email} onChange={handleEmail} required/>
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
    </>
  )
}