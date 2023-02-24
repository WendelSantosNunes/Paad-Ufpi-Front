import styled from "styled-components";

export const ContainerMemberID = styled.section`
  .title{
    text-align: center;

    margin: 2.625rem;

    font-size: 2rem;
  }

  .image{
    text-align: center;

    img{
      width: 100%;
      max-width: 43.75rem;

      border-radius: 1rem;
    }

    margin-bottom: 2.6875rem;
  }

  .info {
    display: grid;
    grid-template-columns: 1fr 1fr;

    margin-bottom: 3.75rem;

    h2 {
      margin-top: 1rem;

      font-size: 1.5rem;
    }

    p {
      margin: 1rem 0 0 0.5rem;

      font-size: 1.125rem;
    }
  }
`