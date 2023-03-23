import styled from "styled-components";

export const ContainerCreateTeacher = styled.section`
  background-color: #222831;

  border-radius: 15px;

  .error{
    /* text-align: center; */

    color: red;
  }

  > div{
    margin: 3rem auto;  
    
    max-width: 100%;
    width: 34.375rem;

    color: #EEE;

    label{
      margin-bottom: 0.75rem;
    }

    .title{
      text-align: center;
      /* margin: 2.625rem; */


      h1{
        padding-top: 1.875rem;
      }
    }

    .images{
      display: flex;
      flex-direction: column;

      #image{
        max-width: 100%;
        width: 400px;

        margin: 0 0 1rem 0.5rem;
      }
    }


    .forms{
      display: flex;
      flex-direction: column;

      label{
        margin-bottom: 0.75rem;
      }

      input, select{
        margin: 0 0 1rem 0.5rem;

        max-width: 100%;
        width: 370px;
        
        border: 1px solid #EEE;
        border-radius: 5px;

        padding: 0.5rem 0 0.5rem 1.25rem;
      }
     
    }

    #email {
      width: 500px;  
    }

    .ButtoNews{
      margin-bottom: 3rem;
    }
  }
/* 
  @media (max-width: 71.875rem){
    margin: 0 1rem;
  } */
`

