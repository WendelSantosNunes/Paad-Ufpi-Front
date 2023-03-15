import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import { ContainerProject } from "./styles";

export function ProjectStart(){
  const {login} = useContext(UserContext)
  const [end, setEnd] = useState(4)
  const [start, setStart] = useState(0)
  const [results, setResults] = useState([])

  async function data(){
    const response = await axios.get('https://api-paadupfi.onrender.com/project/?'+`limit=${end}&offset=${start}`)
    
    setResults(response.data.results)
  }

  useEffect(() => {
    data()
  },[end])

  function handleMais(){
    setEnd(start + 4)
  }
  
  return(
    <>
      <ContainerProject className="container">

        <div className="title">
          <h1>Projeto</h1>
        </div>

        { results && results.map((item) => {
          console.log(item)
          return <div className="titleProject" key={item.id}>
            <Link to={"project-id/?key=" + item.id}>
              <h2>{item.title}</h2>

              <hr />

              <p className="collaborators"> {item.teacher.map((item) => item.fullName + ' - ')} Coordenador / {item.student.map((item) => item.fullName + ' - ')}  Integrante </p>

              <p className="text">
                {item.description}
              </p>
              </Link>

            </div>
        })}

        <div className='options'>
          {
            login && <>
                <div>
                  <Link to='create-project/'>Adicionar Projeto</Link>
                </div>
            </>
          }
 
          <div onClick={handleMais}>Ver mais</div>
        </div>

      </ContainerProject>
    </>
  )
}