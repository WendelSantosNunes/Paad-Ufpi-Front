import axios from "axios";
import { useEffect, useState, useContext } from "react"
import { Button } from "../Button/Button";
import { ContainerCreateStudent } from "./styles";
import { useNavigate } from "react-router-dom";
import { NotLogin } from "../../../../components/NotLogin/NotLogin";
import { UserContext } from "../../../../context/UserContext";

export function CreateStudent() {
  const {login} = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [selectedCourses, setSelectedCourses] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [teacher, setTeacher] = useState([]);
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  function handleFullName({target}){
    setFullName(target.value)
  }

  function handleImage({target}){

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

  function handleCourses({target}){
    setSelectedCourses(target.value);
  }

  function handleTeacher({target}){
    setSelectedTeacher(target.value);
  }

  function handleEmail({target}){
    setEmail(target.value)
  }

  async function data(){
    const response = await axios.get(`https://api-paadupfi.onrender.com/teacher/?limit=${35}&offset=${0}`)

    setTeacher(response.data.results)
  }

  useEffect(() => {
    data()
  },[])

  async function handleSubmit(event){
    setLoading(true)
    
    event.preventDefault()

    const types = {
      email: {
          regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          message: 'Preencha um email válido'
      }
    }

    if(fullName != '' && image != '' && selectedCourses != '' && selectedTeacher != '' && email != '' && error === '' && types.email.regex.test(email)){
      const formData = new FormData()

      const token = window.localStorage.getItem('Token')

      formData.append('teacher', selectedTeacher)
      formData.append('course', selectedCourses)
      formData.append('email', email)
      formData.append('image', image)
      formData.append('fullName', fullName)

      try{
        let response = await axios.post('https://api-paadupfi.onrender.com/student/', formData, {
          headers: {
              Authorization: 'Bearer ' + token,
          }
        })

        let id = response.data.student.teacher
        let student = response.data.student._id

        await axios.patch('https://api-paadupfi.onrender.com/teacher/add/student', {id, student}, {
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
    setLoading(false)
  }

  return(
   

   <>
     {
      login ? (
        <ContainerCreateStudent className="container">
          <div>
            <div className="title">
              <h1>Estudante</h1>
            </div>
    
            <form action="" onSubmit={handleSubmit}>
    
              <div className="forms">
                <label htmlFor="fullName">Nome</label>
                  <input type="text" name="fullName" id="fullName" value={fullName} onChange={handleFullName} required/>
              </div>
    
              <div className="images">
                <label htmlFor="image">Imagem</label>
                  <input type="file" name="image" id="image" onChange={handleImage} required />

                  <p className="error">{error}</p>
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
                <label htmlFor="category">Teacher</label>
                  
                  <select value={selectedTeacher} onChange={handleTeacher} name="select" required>
                    <option value="">Selecione uma opção</option>
    
                    {teacher && teacher.map((item) => <option key={item.id} value={item.id}>{item.fullName}</option>)}
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
        </ContainerCreateStudent>
      ):(
        <NotLogin />
      )
    }
   </>
  )

}