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
        padding: 0.5rem 0;

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
    }
`

export const Menu = styled.div`
   div{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;

        div{
            padding: 0.5rem 0 0.25rem 0;
        }

        nav{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            a{
                text-decoration: none;
                color: #EEE;

                font-size: 1.125rem;

                :hover{
                    font-size: 1.25rem;
                }
            }
        }
    }
`