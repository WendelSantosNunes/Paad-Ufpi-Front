import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #222831;
`

export const FooterDiv = styled.div`
    display: flex;
    justify-content: space-between;
    
    p,h3,a {
        color: #eee;
    }

    div{
        text-align: center;
        padding-bottom: 1rem;

        h3{
            padding: 1.5rem 0 0.5rem 0;
        }

        div a{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            svg{
                color: #eee;
            }
        }

        .social {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
    

`
