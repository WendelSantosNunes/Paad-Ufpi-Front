import { useFetch } from "../../../../Hooks/useFetch";
import { NEWS_GET_ID } from '../../../../api'
import { useEffect, useState } from 'react';
import { API_URL } from "../../../../api";
import { format } from 'date-fns'

import { Navigate, Route, Routes } from "react-router-dom";
import { ContainerNewsID } from "./styles";


export function NewsID(){
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')

    const {url, options } = NEWS_GET_ID(key)
    request(url, options)
  },[])

  if(data){
    console.log(data)
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
                  <img src={API_URL + data.news.image} alt={"Imagem sobre "+ data.news.title} />
                </div>
                <div className="subtitle">
                  <p>{format(new Date(data.news.date), 'dd/mm/yyyy')}</p>
                </div>
                <p className="description">{data.news.description}</p>
              </>
            )
          }
      </ContainerNewsID>
    </>   
  )
}