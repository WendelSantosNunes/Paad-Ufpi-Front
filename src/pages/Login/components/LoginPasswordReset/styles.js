import styled from "styled-components";

export const LoginResetStyle = styled.div`
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
    width: 350px;

    button{
      max-width: 15rem;
    }
  }
`