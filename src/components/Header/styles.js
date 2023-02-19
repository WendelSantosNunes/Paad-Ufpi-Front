import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: #222831;
`

export const SocialMedia = styled.div`
    background-color: #EEE;

    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.5rem;

        .email{
            font-size: 1.5rem;
            text-decoration: none;
            color: #222831;
        }

        div{
            display: flex;
            align-items: center;
            gap: 0.5rem;
        
            a{
                padding: 0;
                margin: 0;
                color: #222831;
            }

            svg:hover{
                color: #484B4D;
            }
        }

        @media (max-width: 18.75rem){
            flex-direction: column;
        }
    }
`

export const Menu = styled.div`
   div{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.5rem;

        div{
            padding: 0.5rem 0 0.25rem 0;
        }

        nav{
            display: flex;
            align-items: center;
            gap: 1rem;
            a{
                text-decoration: none;
                color: #EEE;

                font-size: 1.125rem;

                :hover{
                    font-size: 1.25rem;
                }
            }

            button {
                border: none;
                border-radius: 20px;
                color: #EEE;
                background-color: #484B4D;

                padding: 0.6rem 0.5rem;

                font-size: 1.125rem;

                cursor: pointer;

                :hover {
                    background-color: red;
                }
            }
        }

        @media (max-width: 18.75rem){
            flex-direction: column;
        }
    }
`