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
    </CardStyle>
  )
}