import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { PublicationContainer } from "./styles";

import axios from "axios";
import { format } from 'date-fns'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function PublicationStart(){
  const {login} = useContext(UserContext)
  const [end, setEnd] = useState(4)
  const [start, setStart] = useState(0)
  const [results, setResults] = useState([])

  const token = window.localStorage.getItem('Token')

  async function data(){
    const response = await axios.get('https://api-paadupfi.onrender.com/publication/?'+`limit=${end}&offset=${start}`)
    
    setResults(response.data.results)
  }

  useEffect(() => {
    data()
  },[end])

  function handleMais(){
    setEnd(end + 4)
  }

  async function handleDeletePublcation({target}){

    let key = target.getAttribute('value')

    try {
      await axios.delete('https://api-paadupfi.onrender.com/publication/' + key, {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
      
      data()
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
      <PublicationContainer className="container">

        <div className="title">
          <h1>Publicação</h1>
        </div>

        {
          results && results.map((item, key) => {
            if(key < end){ 
              return <div className="description" key={item.id}>
                  <p>
                    <a href={item.link} target="_blank">{item.description}</a>
                  </p>
              
                  <p className="data">
                    {format(new Date(item.createdAt), 'dd/MM/yyyy')}
                  </p>

                  {    
                    login && <>
                      <div className='options'>
                          <div>
                            <Link to={'update-publication/?key='+ item.id}>Editar</Link>
                          </div>
                          <div onClick={handleDeletePublcation} value={item.id}>
                            Excluir
                          </div>
                      </div>
                    </>
                  }

                  <hr />
                </div>
            }
          })
        }    
         
        <div className='options'>
          {
            login && <>
              <div>
                <Link to='create-publication/'>Adicionar Publicação</Link>
              </div>
            </>
          }
 
          <div onClick={handleMais}>Ver mais</div>
        </div>

      </PublicationContainer>
    </>
  )
}