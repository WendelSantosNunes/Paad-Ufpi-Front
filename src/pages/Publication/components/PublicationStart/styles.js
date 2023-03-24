import styled from "styled-components";

export const PublicationContainer = styled.section`
  
  flex-grow: 1;
  min-height: 31.25rem;

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
    a{
      color: #222831;
    }
  }

  .data{
    margin-top: 1rem;
  }

  .options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    margin-bottom: 5.125rem;

    a{
        color: #eee;
    }

    div{
      text-align: center;
      background-color: #393E46;
      padding: 1rem;

      color: #eee;

      border-radius: 15px;
      cursor: pointer;

      :hover{
        background-color: var(--button-hover)
      }
    }
  }
`