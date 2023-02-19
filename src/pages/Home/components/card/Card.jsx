import { CardStyle } from "./styles";

export function Card({title, description,image}){

  return (
    <CardStyle>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="description">
        <div>
          <h2>{title}</h2>
        </div>
        <div> 
          {description}
        </div>
      </div>
    </CardStyle>
  )
}