import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ContainerUpdateProject } from "./styles";
import { Button } from "../../../Login/components/components/Button/Button"


export function UpdateProject(){
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [selectedOptionsTeachers, setSelectedOptionsTeachers] = useState([]);
  const [selectedOptionsStudent, setSelectedOptionsStudent] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Pesquisa');
  const navigate = useNavigate()

  // Professores
  const [teacher, setTeacher] = useState([])

  // Alunos
  const [student, setStudent] = useState([])

  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')

  function handleTitle({target}){
    setTitle(target.value)
  }

  function handleDescription({target}){
    setDescription(target.value)
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  function handleTeachers(event){
    const options = event.target.options;
    const selectedValues = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    setSelectedOptionsTeachers(selectedValues);
  }

  function handleStudent(event){
    const options = event.target.options;
    const selectedValues = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    setSelectedOptionsStudent(selectedValues);
  }

  async function getProject(){
    let response = await axios.get(`https://api-paadupfi.onrender.com/project/${key}`)

    setTitle(response.data.project.title)
    setDescription(response.data.project.description)
    setSelectedOptionsTeachers(response.data.project.teacher)
    setSelectedOptionsStudent(response.data.project.student)
    setSelectedOption(response.data.project.category)
    console.log(response)
  }


  async function data(){
    const response = await axios.get(`https://api-paadupfi.onrender.com/teacher/?limit=${35}&offset=${0}`)
    setTeacher(response.data.results)
  }

  async function dataStudent(){
    const response = await axios.get(`https://api-paadupfi.onrender.com/student/?limit=${35}&offset=${0}`)
    setStudent(response.data.results)
  }

  useEffect(() => {
    data()
    dataStudent()
    getProject()
  },[])

  async function handleSubmit(event){
    event.preventDefault()

    const token = window.localStorage.getItem('Token')
    
    try {
      setLoading(true)

      let response = await axios.patch('https://api-paadupfi.onrender.com/project/' + key, {title: title, description: description, category: selectedOption, teacher:selectedOptionsTeachers, student: selectedOptionsStudent}, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
      
      console.log(response)
      setLoading(false)
      navigate('/project')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ContainerUpdateProject className="container">
      <div>
        <div className="title">
          <h1>Projeto</h1>
        </div>

        <form action="" onSubmit={handleSubmit}>

          <div className="titleProject">
            <label htmlFor="title">Título</label>
            <input type="text" name="title" id="title" value={title} onChange={handleTitle}/>
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <div className="categoryItems">
              <div className="categoryItem">
                <input type="radio" name="category"  id="category" value="Pesquisa"  checked={selectedOption === 'Pesquisa'} onChange={handleOptionChange}/>
                <p>Pesquisa</p>
              </div>

              <div className="categoryItem">
                <input type="radio" name="category"  id="category" value="Desenvolvimento tecnológico" checked={selectedOption === 'Desenvolvimento tecnológico'} onChange={handleOptionChange}/>
                <p>Desenvolvimento tecnológico</p>
              </div>

              <div className="categoryItem">
                <input type="radio" name="category"  id="category" value="Extersão" checked={selectedOption === 'Extersão'} onChange={handleOptionChange}/>
                <p>Extersão</p>
              </div>
            </div>
          </div>

          <div className="teacherStudent">
            <label htmlFor="category">Professores</label>
            
            <select value={selectedOptionsTeachers} onChange={handleTeachers} name="select" multiple>
              {teacher && teacher.map((item) => <option key={item.id} value={item.id}>{item.fullName}</option>)}
            </select>
          </div>

          <div className="teacherStudent">
            <label htmlFor="category">Alunos</label>
            
            <select name="select" value={selectedOptionsStudent} onChange={handleStudent} multiple>

              {student && student.map((item) => <option key={item.id} value={item.id}>{item.fullName}</option>)}
            </select>
          </div>
          
          
          <div className="descriptions">
            <label htmlFor="description">Descrição</label>
            <textarea name="description" id="description" cols="30" rows="10" onChange={handleDescription} value={description} required></textarea>
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
    </ ContainerUpdateProject>
  )
}