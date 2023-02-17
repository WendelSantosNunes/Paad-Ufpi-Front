import { CardStyle } from "./styles";
import { API_URL } from "../../../../api";

export function Card({title, description,image}){

  return (
    <CardStyle>
      <div>
        <img src={API_URL + image} alt="" />
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