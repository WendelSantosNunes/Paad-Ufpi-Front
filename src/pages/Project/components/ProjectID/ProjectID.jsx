import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { UserContext } from "../../../../context/UserContext"
import { ContainerProjectId } from "./styles"

export function ProjectID(){
  const {login} = useContext(UserContext)
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')

  async function data(){
    const response = await axios.get(`https://api-paadupfi.onrender.com/project/${key}`)

    setResults(response.data.project)
  }

  useEffect(() => {
    data()
  },[])

  async function handleDeleteProject(){
    const token = window.localStorage.getItem('Token')

    try {
      await axios.delete(`https://api-paadupfi.onrender.com/project/${key}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
      navigate('/project')
    } catch (error) {
      console.log(error)
    }
  }


  return(
    <ContainerProjectId className="container">

     {
      results && <>
        <div className="title">
          <h1>{results.title}</h1>
        </div>

        <div>
          <h2>Professores:</h2>
          {results.teacher && results.teacher.map(item => <p key={item.id}>{item.fullName}</p>)}
        </div>

        <div>
          <h2>Alunos:</h2>
          {results.student && results.student.map(item => <p key={item.id}>{item.fullName}</p>)}
        </div>

        <div>
          <h2>Descrição:</h2>
          <p>{results.description}</p>
        </div>

        {
          login && <>
              <div className="option">
                <Link to={'/project/project-update-id/?key=' + key} key={results.id}>Editar</Link>
                
                <div onClick={handleDeleteProject} >
                  Excluir
                </div>
            </div>
          </>
        }
      </>
     }

    </ContainerProjectId>
  )
}