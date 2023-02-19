import { useEffect, useState } from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../../../Hooks/useFetch";
import { NEWS_GET } from '../../../../api'
import { UserContext } from "../../../../context/UserContext";
import { Card } from "../Card/Card";
import { NoticiasCard } from './styles'


export function TodasNoticias(){
  const { data, loading, error, request } = useFetch()
  const {login} = useContext(UserContext)
  const [end, setEnd] = useState(6)
  const [start, setStart] = useState(0)

  useEffect(() => {
      const {url, options } = NEWS_GET()

      request(url+`?limit=${end}&offset=${start}`, options)
  },[end])

  async function handleMais(){
    setEnd(end + 6)
  }

  return (
    <>
      <NoticiasCard className='container'>
        <div className="card">
                  { data && data.results.map( (item,key) => {
                    if(key <= end) 
                      return  <Link to={'news-id/?key=' + item.id}  key={item.id}><Card title={item.title} description={item.description} image={item.image}/></Link>
                  })}
        </div>

        { login && <>
          <div className='options'>
            <div><Link to='create-news/'>Adicionar Noticía</Link></div>
            <div onClick={handleMais}>Ver mais</div>
          </div>
        </>
      }
      </NoticiasCard>
      
    </>
  )
}