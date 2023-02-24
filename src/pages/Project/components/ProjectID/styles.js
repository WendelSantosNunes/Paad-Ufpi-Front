import styled from "styled-components";

export const ContainerProjectId = styled.section`
  .title{
    text-align: center;

    margin: 2.625rem;

    font-size: 1.5rem;
  }

  h2{
    margin-bottom: 1rem;
  }

  p{
    margin: 0 0 1rem 1rem;
  }

  .option{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    margin-top: 2rem;

    a, div{
      font-size: 1.125rem;
      color: #EEE;  
      background-color: #393E46;
          
      border-radius: 1rem;

      padding: 13px;
          
      width: 100%;
      max-width: 7.0625rem;

      text-align: center;

      cursor: pointer;
    }

    margin-bottom: 4rem;
  }
`