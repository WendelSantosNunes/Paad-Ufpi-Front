import { Card } from './components/card/Card'
import { NoticiasCard } from './styles'
import { useFetch } from "../../Hooks/useFetch";
import { NEWS_GET } from '../../api'
import { useEffect } from 'react';


export function Noticias(){
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
      const {url, options } = NEWS_GET()
      request(url, options)
  },[])

  return (
    <NoticiasCard className='container'>
      <div className="card">
                { data && data.results.map( (item) => { 
                  return <Card key={item.id} title={item.title} description={item.description} image={item.image}/>
                })}
            </div>
    </NoticiasCard>
  )
}