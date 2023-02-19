import { useFetch } from "../../../../Hooks/useFetch";
import { NEWS_GET_ID, NEWS_DELETE_ID } from '../../../../api'
import { useContext, useEffect, useState } from 'react';
import { format } from 'date-fns'

import { Link, useNavigate } from "react-router-dom";
import { ContainerNewsID } from "./styles";
import { UserContext } from "../../../../context/UserContext";


export function NewsID(){
  const { data, loading, error, request } = useFetch()
  const { login } = useContext(UserContext)
  const navigate = useNavigate()

  const params = new URLSearchParams(window.location.search)
  const key = params.get('key')

  useEffect(() => {
    const {url, options } = NEWS_GET_ID(key)
    request(url, options)
  },[])

  async function handleDeleteNews(){
    const token = window.localStorage.getItem('Token')
    const {url, options } = NEWS_DELETE_ID(key, token)
    
    try {     
      await request(url, options)

      navigate('/news/')
    } catch (error) {
      console.log(error) 
    }
  } 

  return(
    <>
      <ContainerNewsID className="container">
          {
            data && (
              <>
                <div className="title">
                  <h1>{data.news.title}</h1>
                </div>
                <div className="image">
                  <img src={data.news.image} alt={"Imagem sobre "+ data.news.title} />
                </div>
                <div className="subtitle">
                  <p>{format(new Date(data.news.date), 'dd/MM/yyyy')}</p>
                </div>
                <p className="description">{data.news.description}</p>
              </>
            )
          }

        { login && <>
            <div className='options'>
              <div><Link to={'/news/update-news/?key='+ key}>Editar</Link></div>
              <div onClick={handleDeleteNews}>Excluir</div>
            </div>
          </>
        }
      </ContainerNewsID>
    </>   
  )
}