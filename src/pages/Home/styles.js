import styled from 'styled-components'

export const HomeContainer = styled.div`

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
    max-height: 500px;
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

    margin-bottom: 3.125rem;

    font-size: 1rem;
  }
  
  @media (max-width: 69.375rem){
    .card {
      grid-template-columns: 1fr 1fr;

      a{
        display: flex;
        justify-content: center;
      }
    }
  }


  @media (max-width: 46.875rem){
    .card {
      grid-template-columns: 1fr;

      a{
        display: flex;
        justify-content: center;
      }
    }
  }

 @media (max-width: 23.125rem){
    .card {
      display: flex;
      flex-direction: column;
    }
  }  
`