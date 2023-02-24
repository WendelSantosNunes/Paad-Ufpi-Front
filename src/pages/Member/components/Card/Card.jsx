import { CardStyle } from "./styles";

export function Card({name, image}){

  return (
    <CardStyle className="card">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="description">
        <div>
          <h2>{name}</h2>
        </div>
        {/* <div> 
          {description}
        </div> */}
      </div>

      {/* { 
        login && <>
          <div className='option'>
              <Link to='create-student/'>Editar</Link>

              <Link to='create-student/'>Excluir</Link>
          </div>
        </>
      } */}
    </CardStyle>
  )
}