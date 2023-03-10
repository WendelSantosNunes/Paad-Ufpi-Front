import styled from "styled-components";

export const ContainerUpdateProject = styled.section`
  background-color: #222831;

  border-radius: 0.7rem;
  
  flex-grow: 1;
  min-height: 31.25rem;

  > div{

    margin: 3rem auto;  
    
    max-width: 100%;
    width: 609px;

    color: #EEE;

    .title{
      text-align: center;

      h1{
        font-size: 2rem;
        padding-top: 1.875rem;
      }
    }

    label{
      margin: 0.75rem 0;
      font-weight: bold;

      font-size: 1.2rem;
    }

    .titleProject{
      display: flex;
      flex-direction: column;

      width: 100%;

      input {
        width: 100%;
        max-width: 500px;

        border: none;
        border-radius: 0.7rem;
        
        margin: 0 0 1rem 0.5rem;
        padding: 0.5rem;

      }
    }

    .categoryItems{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      margin-top: 1rem;

      .categoryItem{
        display: flex;
        gap: 10px;
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
    
    .teacherStudent{
      display: flex;
      flex-direction: column;

      max-width: 300px;
      width: 100%;

      select {
        margin: 0 0 1rem 0.5rem;
      }
    }

    .ButtoNews{
      margin-bottom: 2rem;
    }
  } 
`