import styled from "styled-components";

export const CardStyle = styled.div`
  width: 100%;
  max-width: 333px;
  height: 270px;

  background-color: #393E46;

  border-radius: 12px;

  > div img {
    width: 100%;
    height: 171px;
  }

  .description{
    color: #EEE;
   
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    text-align: center;

    div{
      width: 80%;
    }
  }  

  div{
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis;
  }
`