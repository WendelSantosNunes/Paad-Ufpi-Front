import styled from "styled-components";

export const NoticiasCard = styled.div`

  flex-grow: 1;
  min-height: 31.25rem;

  h2{
    margin: 2.5rem 0 2.1875rem;
    font-size: 1.125rem;
  }

  .card{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    margin: 3.125rem auto 3.125rem auto;

    font-size: 1rem;

    @media (max-width: 68.75rem){
      grid-template-columns: 1fr 1fr;

      div{
        margin: 0 auto;
      }
    }

    @media (max-width: 46.875rem){
      grid-template-columns: 1fr;

      display: flex;
      flex-direction: column;
    }
  }
  
  .options{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    margin-bottom: 3.125rem;

    div{
      background-color: #393E46;
      padding: 1rem;

      color: #eee;

      border-radius: 15px;
      cursor: pointer;
      a{
        color: #eee;
      }

      :hover{
        background-color: var(--button-hover)
      }
    }
  }
`