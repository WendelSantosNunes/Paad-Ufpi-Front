import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import { Button } from "../Button/Button";
import { MemberContainer ,CardStyle} from "./styles";

export function MemberStar(){
  const {login} = useContext(UserContext)
  const [student, setStudent] = useState([])
  const [teacher, setTeacher] = useState([])
  const navigate = useNavigate()

  async function dataStudent(){
    try {
      let response = await axios.get(`https://api-paadupfi.onrender.com/student/?limit=${35}&offset=${0}`)
      setStudent(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  async function dataTeacher(){
    try {
      let response = await axios.get(`https://api-paadupfi.onrender.com/teacher/?limit=${35}&offset=${0}`)

      setTeacher(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteStudent(student, teacher){

    const token = window.localStorage.getItem('Token')
    
    try {     
      await axios.delete(`https://api-paadupfi.onrender.com/student/${student}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })

      await axios.patch('https://api-paadupfi.onrender.com/teacher/remover/student', {student:student, id: teacher }, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
      dataStudent()
    } catch (error) {
      console.log(error) 
    }
  } 

  async function handleDeleteTeacher(teacher, student){

    const token = window.localStorage.getItem('Token')
        
    try {     
      let response = await axios.delete(`https://api-paadupfi.onrender.com/teacher/${teacher}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })

      student.map( async (item) => {
        await axios.delete(`https://api-paadupfi.onrender.com/student/${item}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
        })
      })

      console.log(response)
      navigate('/member')
    } catch (error) {
      console.log(error) 
    }
  } 


  useEffect(() => {
    dataStudent()
    dataTeacher()
  },[])

  return (
    <MemberContainer className="container">
        <div className="title">
          <h1>Membros</h1>
        </div>

        <div className="member">
          <h2>Corpo Docente</h2>

          <hr />

          <div>
          {teacher && teacher.map((item) => {
              return <div className="cardMain" key={item.id}> 
                <Link to={"member-id?key=" + item.id} className="card">
                  <CardStyle className="card">
                    <div>
                      <img src={item.image} alt="" />
                    </div>
                    
                    <div className="description">
                      <div>
                        <h2>{item.fullName}</h2>
                      </div>
                    </div>

                  </CardStyle>
                </Link>

                {
                  login && <>
                    <div className="option">
                      <Link to={'update-teacher-id/?key=' + item.id} key={item.id}>Editar</Link>
                      <div onClick={(event) => {
                        event.preventDefault()
                        handleDeleteTeacher(item.id,item.students)}}>Excluir</div>
                    </div>
                  </>
                }
              </div>
            })}
          </div>
        </div>

        { 
          login && <>
            <div className='options'>
              <Button>
                <Link to='create-teacher/'>Adicionar Professor(a)</Link>
              </Button>
            </div>
          </>
        }

        <div className="member">
          <h2>Corpo Discente</h2>

          <hr />

          <div>
            {student && student.map((item) => {
              return <div className="cardMain" key={item.id}> 
                <Link to={"member-student-id?key=" + item.id} className="card">
                  <CardStyle className="card">
                    <div>
                      <img src={item.image} alt="" />
                    </div>
                    
                    <div className="description">
                      <div>
                        <h2>{item.fullName}</h2>
                      </div>
                    </div>

                  </CardStyle>
                </Link>

                {
                  login && <>
                    <div className="option">
                      <Link to={'update-student-id/?key=' + item.id} key={item.id}>Editar</Link>
                      <div onClick={(event) => {
                        event.preventDefault()
                        handleDeleteStudent(item.id, item.teacher)}} value={item.id}
                        >Excluir</div>
                    </div>
                  </>
                }
              </div>
            })}

          </div>

        </div>

        { 
          login && <>
            <div className='options'>
              <Button>
                <Link to='create-student/'>Adicionar Aluno(a)</Link>
              </Button>
            </div>
          </>
        }
    </MemberContainer>
  )
}