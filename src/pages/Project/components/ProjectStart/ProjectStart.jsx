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
    
    // const response = await axios.get('http://localhost:3000/project/?'+`limit=${end}&offset=${start}`)

    setResults(response.data.results)
  }

  useEffect(() => {
    data()
  },[end])

  // console.log(results)

  return(
    <>
      <ContainerProject className="container">

        <div className="title">
          <h1>Projeto</h1>
        </div>

        { results && results.map((item) => {
          console.log(item)
          return <div className="titleProject" key={item.id}>
              <h2>{item.title}</h2>

              <hr />

              <p className="collaborators"> {item.teacher.map((item) => item.nome + ' - ')} Coordenador / {item.student.map((item) => item.nome + ' - ')}  Integrante </p>

              <p className="text">
                {item.description}
              </p>
            </div>
        })}


        {/* <div className="titleProject">
          <h2>Serviços Inteligentes para Predição de Índices de Criminalidade Urbana Baseado em Fontes de Dados Abertas Geradas por Usuários na Web</h2>

          <hr />

          <p className="collaborators">Glauber Dias Goncalves - Coordenador / Saul Sousa da Rocha - Integrante </p>

          <p className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div> */}

        {    
          login && <>
            <div className='options'>
              <div><Link to='create-project/'>Adicionar Projeto</Link></div>
              <div>Ver mais</div>
            </div>
          </>
        }

      </ContainerProject>
    </>
  )
}