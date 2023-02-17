import { useEffect } from 'react';
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

  useEffect(() => {
      const {url, options } = NEWS_GET()
      request(url, options)
  },[])

  return (
    <>
      <NoticiasCard className='container'>
        <div className="card">
                  { data && data.results.map( (item) => { 
                    return  <Link to={'news-id/?key=' + item.id}  key={item.id}><Card title={item.title} description={item.description} image={item.image}/></Link>
                  })}
              </div>
      </NoticiasCard>
      

      {/* {
       {
        if(login){
          return <div> </div>
        }
       }
      } */}
    </>
  )
}