import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #222831;

    .footerEnd{
        background-color: #EEE;
        text-align: center;

        font-size: 1.3rem;
        padding: 0.6875rem 0;
    }
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
    
    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
        div{
             justify-content: center;
        }
    }
`
