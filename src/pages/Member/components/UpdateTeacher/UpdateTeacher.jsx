import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { Button } from "../Button/Button";
import { ContainerCreateTeacher } from "./styles";
import { useNavigate } from "react-router-dom";
import { NotLogin } from "../../../../components/NotLogin/NotLogin";
import { UserContext } from "../../../../context/UserContext";

export function UpdateTeacher() {
  const {login} = useContext(UserContext)
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

    formData.append('course', selectedCourses)
    formData.append('email', email)
    formData.append('image', image)
    formData.append('fullName', fullName)
    formData.append('students', students)

    try {
      if(haveImage == 1){
        await axios.patch('https://api-paadupfi.onrender.com/teacher/' + key, formData, {
          headers: {
            Authorization: 'Bearer ' + token,
          }
        })
      }else{
        await axios.patch('https://api-paadupfi.onrender.com/teacher/update/' + key, {
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
      console.log("O arquivo selecionado ?? muito grande (tamanho m??ximo de 5 MB)")
      return
    }
  
    if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      console.log("Tipo de arquivo inv??lido (somente imagens JPEG, PNG e GIF s??o permitidas)")
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
      {
        login ? (
          <ContainerCreateTeacher className="container">
            <div>
              <div className="title">
                <h1>Atualiza????o de Dados</h1>
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
                  <option value="">Selecione uma op????o</option>
                    <option value="Administra????o">Administra????o</option>
                    <option value="Biologia">Biologia</option>
                    <option value="Enfermagem">Enfermagem</option>
                    <option value="Hist??ria">Hist??ria</option>
                    <option value="Medicina">Medicina</option>
                    <option value="Nutri????o">Nutri????o</option>                
                    <option value="Sistema de Informa????o">Sistema de Informa????o</option> 
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
         ):(
          <NotLogin />
        )
      }
    </>
  )
}