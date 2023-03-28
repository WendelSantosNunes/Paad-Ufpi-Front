import axios from "axios";
import { useEffect, useState, useContext } from "react"
import { Button } from "../Button/Button";
import { ContainerCreateStudent } from "./styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import { NotLogin } from "../../../../components/NotLogin/NotLogin";

export function UpdateStudent(){
  const {login} = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [haveImage, setHaveImage] = useState(0)
  const [selectedCourses, setSelectedCourses] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [teacher, setTeacher] = useState([]);
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const [studentGet, setStudentGet] = useState([])
  const [error, setError] = useState('')

  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')

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
    setHaveImage(1)
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
    try {
      const response = await axios.get(`https://api-paadupfi.onrender.com/teacher/?limit=${35}&offset=${0}`)

      setTeacher(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  async function getStudent(){
    let response = await axios.get(`https://api-paadupfi.onrender.com/student/${key}`)

    setFullName(response.data.student.fullName)
    setImage(response.data.student.image)
    setEmail(response.data.student.email)
    setSelectedTeacher(response.data.student.teacher._id)
    setSelectedCourses(response.data.student.course)
    setStudentGet(response.data.student)
  }

  useEffect(() => {
    data()
    getStudent()
  },[])

  async function handleSubmit(event){
    setLoading(true)
    
    event.preventDefault()

    if(fullName != '' && image != '' && selectedCourses != '' && selectedTeacher != '' && email != '' && error === ''){
      const formData = new FormData()

      const token = window.localStorage.getItem('Token')

      formData.append('teacher', selectedTeacher)
      formData.append('course', selectedCourses)
      formData.append('email', email)
      formData.append('image', image)
      formData.append('fullName', fullName)

      try{

        await axios.patch('https://api-paadupfi.onrender.com/teacher/remover/student', {student:studentGet.id, id: studentGet.teacher._id }, {
          headers: {
            Authorization: 'Bearer ' + token,
          }
        })

        if(haveImage == 1){
          await axios.patch('https://api-paadupfi.onrender.com/student/' + key, formData, {
            headers: {
              Authorization: 'Bearer ' + token,
            }
          })
        }else{
           await axios.patch('https://api-paadupfi.onrender.com/student/update/' + key, {
            course: selectedCourses,
            email: email,
            image: image,
            fullName: fullName,
            teacher: selectedTeacher 
          }, {
            headers: {
              Authorization: 'Bearer ' + token,
            }
          })
        }

        let id = selectedTeacher
        let student = key

        let response1 = await axios.patch('https://api-paadupfi.onrender.com/teacher/add/student', {id, student}, {
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
        login ?(
          <ContainerCreateStudent className="container">
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
                    <input type="text" name="email" id="email" value={email}onChange={handleEmail} required/>
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