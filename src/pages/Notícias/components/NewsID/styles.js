import styled from "styled-components";

export const ContainerNewsID = styled.section`

  .title {
    margin-top: 2.625rem;
    font-size: 2rem;

    text-align: center;
  }
  
  .image{
    margin: 1.625rem auto;
    max-width: 55rem;

    img{
      width: 100%;
    }
  }

  .subtitle{
    text-align: center;

    margin-bottom: 2rem;

    font-size: 1.125rem;
    font-weight: 700;

    color: #222831;

  }

  .description{
    font-size: 1.3rem;
    font-weight: 700;
    text-align: justify;

    margin-bottom: 5rem;

    color: #222831;
  }

  .options{
    display: flex;
    justify-content: center;
    gap: 20px;

    margin-bottom: 2.5rem;

    font-size: 1.125rem;

    div{
      background-color: var(--button);
      padding: 1rem;

      border-radius: 15px;

      color: var(--fonts);
      cursor: pointer;

      a {
        color: var(--fonts)
      }

      :hover{
        background-color: red;
      }
    }
  }
`