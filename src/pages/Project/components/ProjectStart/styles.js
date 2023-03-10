import styled from "styled-components";


export const ContainerProject = styled.section`
  
  flex-grow: 1;
  min-height: 31.25rem;

  .title{
    text-align: center;

    margin: 2.625rem;

    font-size: 2rem;
  }

  .titleProject{
    h2 {
      font-size: 1.5rem;

      margin-bottom: 0.4rem;
    }

    a {
      color: #222831;
    }
  }

  hr{
    margin-bottom: 0.4rem;
  }

  .collaborators{
    font-size: 1rem;

    margin-bottom: 1.25rem;
  }

  .text{
    text-align: justify;

    margin-bottom: 1.25rem;
  }

  .options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    margin-bottom: 5.125rem;

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