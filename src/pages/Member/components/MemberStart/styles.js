import styled from "styled-components";

export const MemberContainer = styled.section`


  .title{
    text-align: center;

    margin: 2.625rem;

    font-size: 2rem;
  }

  .member{
    padding-bottom: 2rem;

    h2{
      margin-top: 1rem;
    }

    > div{
      margin-top: 1rem;

      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .cardMain {
      background-color: #222831;
      height: 20.625rem;

      width: 100%;
      max-width: 333px;

      border-radius: 12px;

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
      }

      @media (max-width: 18.25rem){
        height: 23.75rem;
      }
    }

    
  }

  button{ 
    margin-bottom: 2rem;

    a{
      color: #EEE;
    }
  }
`

export const CardStyle = styled.div`

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

  .option {
    display: flex;

    color: red;
  }
`