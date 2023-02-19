import styled from "styled-components";

export const PublicationContainer = styled.section`
  .title{
    text-align: center;

    margin: 2.625rem auto 1.625rem auto;

    font-size: 1.625rem;;
    font-weight: 700;
  }

  .description {
    margin: 1rem auto 1rem auto;
    text-align: justify;
    p{
      line-height: 150%;
    }
  }

  .data{
    margin-top: 1rem;
  }

  .options {
    display: flex;
    justify-content: center;
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