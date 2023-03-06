import styled from "styled-components";

export const CardStyle = styled.div`
  width: 100%;
  max-width: 20.8125rem;
  height: 21.625rem;

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