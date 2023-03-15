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

export const Menu1 = styled.div`
    .navbar{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding: 15px;

        a {
            text-decoration: none;
            color: #eee;
        }
    }

    .logo{
        margin-right: 50px;
    }

    .list {
        list-style: none;
        display: flex;
        gap: 25px;
    }

    #toggler,
    .navbar label {
        display: none;
    }

    @media screen and (max-width: 744px){
        .menu{
            width: 100%;
            max-height: 0;
            overflow: hidden;
        }

        .menuClose {
            display: none;
        }

        .ri-menu-line{
            color: #eee;
        }

        .list{
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        .navbar label{
            display: inline-flex;
            align-items: center;
            cursor: pointer;
        }

        /* #toggler:checked ~ .menu{
            max-height: 100%;
        } */

        .buttonClick {
            color: #EEE;
            padding: 0.6rem 0.5rem;
            font-size: 1.125rem;
            cursor: pointer;

            :hover {
                background-color: red;
            }
        }

        .menu{
            max-height: 100%;
        }

        a{
                padding: 0;
                margin: 0;
                color: #222831;
            }
            svg:hover{
                color: #484B4D;
            }
    }

    @media screen and (max-width: 265px){
        .logo{
            margin-right: 0;
        }
        
        .navbar{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
    }
`