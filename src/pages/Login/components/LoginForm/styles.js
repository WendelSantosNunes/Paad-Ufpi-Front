import styled from "styled-components";

export const LoginStyle = styled.div`
    background-color: #222831;

    max-width: 61.875rem;
    width: 100%;
    height: 31.5rem;

    margin: 10vh auto;

    display: flex;
    
    color: var(--fonts);

    border-radius: 10px;
    
    div {
        flex: 1;
    }

    .error{
        text-align: center;
        color: #f31;
        font-size: .875rem;
        margin: 0.25rem;
    }

    .containerForm{
        display: flex;
        justify-content: center;
        align-items: center;

        > div{
            max-width: 21.8125rem;
            width: 100%;
            height: 24.4375rem;

            h2{
                font-size: 1rem;
                font-weight: 400;
                margin-bottom: 0.5rem;
            }

            h1{
                font-size: 1.625rem;
                margin-bottom: 2.5rem;
            }


            .linkPassword {

                display: flex;
                justify-content: flex-end;
                font-size: 0.875rem;

                margin: 0.7rem 0 1rem 0;
                a{
                    color: #eee;
                }
            }
        }
    }

    @media (max-width: 62.5rem){
        .image{
            display: none;
        }
    }

    @media (max-width: 26.875rem){
        .containerForm{
            > div{
                h1, h2{
                    text-align: center;
                }
            }
        }
    }
   
`