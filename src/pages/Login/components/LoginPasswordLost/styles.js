import styled from "styled-components";

export const LoginLostStyle = styled.div`
  background-color: #222831;

  max-width: 61.875rem;
  width: 100%;
  height: 31.5rem;

  margin: 10vh auto;  

  color: var(--fonts);

  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    margin-bottom: 3rem;
  }

  form{
    width: 100%;
    max-width: 350px;

    button{
      max-width: 15rem;
    }
  }

  @media (max-width: 26.875rem){
    h1{
      text-align: center;
      font-size: 1.4rem;
    }
  }
`