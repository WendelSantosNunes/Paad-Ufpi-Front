import styled from "styled-components";

export const ContainerCreatePublication = styled.section`

  background-color: #222831;

  border-radius: 0.7rem;

  > div{

    margin: 3rem auto;  
    
    max-width: 100%;
    width: 609px;

    color: #EEE;

    label{
      margin: 0.75rem 0;
      font-weight: bold;

      font-size: 1.2rem;
    }

    .title{
      text-align: center;

      h1{
        font-size: 2rem;
        padding-top: 1.875rem;
      }
    }

    .descriptions{
      display: flex;
      flex-direction: column;

      textarea{
        border-radius: 12px;
        margin: 0 0 1rem 0.5rem;
        padding: 0.5rem;
      }
    }

    .link{
      display: flex;
      flex-direction: column;

      input {
        width: 100%;
        max-width: 500px;

        border: none;
        border-radius: 0.7rem;
        
        margin: 0 0 1rem 0.5rem;
        padding: 0.5rem;

      }
    }

    .ButtoNews{
      margin-bottom: 2rem;
    }
  }

`