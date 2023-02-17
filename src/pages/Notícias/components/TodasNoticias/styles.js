import styled from "styled-components";

export const NoticiasCard = styled.div`

  .swiper-container{
    margin-top: 3.125rem;
  }
  
  .slide-item {
    text-align: center;
    margin: auto 0;
  } 

  .slide-item img {
    width: 100%;
    max-width: 700px;
    object-fit: cover;
  }


  h2{
    margin: 2.5rem 0 2.1875rem;
    font-size: 1.125rem;
  }

  .card{
    display: grid;
    
    grid-template-columns: 1fr 1fr 1fr;

    gap: 2rem;

    margin: 3.125rem auto 3.125rem auto;

    /* margin:  3.125rem auto 20% auto; */

    font-size: 1rem;
  }
  
`