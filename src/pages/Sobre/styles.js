import styled from "styled-components";

export const SobreContainer = styled.div`


  h1{
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
   
    margin: 2.625rem 0 2.5rem 0;

    @media (max-width: 520px){
        margin-top: 1rem;
        font-size: 2.3rem;
    }
  }

  div{
    width: 100%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;


    p{
      max-width: 30rem;
      font-size: 1.4rem;
      text-align: justify;

      @media (max-width: 520px){
        font-size: 1.2rem;
      }
    }

    img{
      max-width: 30rem;

      @media (max-width: 520px){
        max-width: 100%;
      }
    }
  }

  h2{
    text-align: center;

    margin-top: 4.5rem;
    font-size: 1.5rem;

    margin-bottom: 2.5rem;
  }

  #map { height: 180px; }

  a{
    text-align: center;

    img{
      width: 100%;
      margin-bottom: 2.375rem;
    }
  }
`

