import styled from "styled-components";

export const CreateNewsContainer = styled.div`

  background-color: #222831;

  flex-grow: 1;
  min-height: 31.25rem;

  .error{
    text-align: center;

    color: red;
  }

  > div{
    margin: 3rem auto;  
    
    max-width: 100%;
    width: 609px;

    color: #EEE;

    label{
      margin-bottom: 0.75rem;
    }

    .title{
      text-align: center;

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


    .descriptions{
      display: flex;
      flex-direction: column;

      label{
        margin-bottom: 0.75rem;
      }

      textarea{
        border-radius: 12px;
        margin: 0 0 1rem 0.5rem;
        padding: 0.5rem;
      }
    }
    .ButtoNews{
      margin-bottom: 3rem;
    }

    #title{

      display:flex;
      flex-direction: column;

      label{
        font-size: 1rem;
        font-weight: 400;
        margin: 0.75rem 0;
      }

      input{
          margin: 0 0 1rem 0.5rem;
          
          border: 1px solid #EEE;
          border-radius: 5px;

          padding: 0.5rem 0 0.5rem 1.25rem;
      }
    }
  }
`