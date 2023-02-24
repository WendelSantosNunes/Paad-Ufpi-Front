import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ContainerCreateProject } from "./styles";
import { Button } from "../../../Login/components/components/Button/Button"

export function CreateProject(){
  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [student, setStudent] = useState([])
  const [selectedOptionsTeachers, setSelectedOptionsTeachers] = useState([]);
  const [selectedOptionsStudent, setSelectedOptionsStudent] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Pesquisa');
  const navigate = useNavigate()

  // Professores
  const [teacher, setTeacher] = useState([])

  async function handleSubmit(event){
    setLoading(true)

    event.preventDefault()

    const token = window.localStorage.getItem('Token')

    try {
      // let response = await axios.post('https://api-paadupfi.onrender.com/project/', {title: title, description: description, category: selectedOption,teacher:selectedOptionsTeachers,student: selectedOptionsStudent}, {
      //   headers: {
      //     Authorization: 'Bearer ' + token,
      //   }
      // })

      let response = await axios.post('https://api-paadupfi.onrender.com/project/', {title: title, description: description, category: selectedOption,teacher:selectedOptionsTeachers,student: selectedOptionsStudent}, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
      
      console.log(response)
      setLoading(false)
      navigate('/project')
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

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
  },[])

  return (
    <>
      <ContainerCreateProject className="container">

        <div>
          <div className="title">
            <h1>Projeto</h1>
          </div>

          <form action="" onSubmit={handleSubmit}>

            <div className="titleProject">
              <label htmlFor="title">Título</label>
              <input type="text" name="title"  id="title" onChange={handleTitle}/>
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
              <textarea name="description" id="description" cols="30" rows="10" onChange={handleDescription} required></textarea>

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
      </ContainerCreateProject>
    </>
  )
}