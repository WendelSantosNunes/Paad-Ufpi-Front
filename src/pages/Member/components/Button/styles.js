import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;

    button{
        max-width: 21.6875rem;
        width: 100%;

        background-color: #393e46;

        color: var(--fonts);

        padding: 1rem 0;
        margin-top: 1rem;

        border:none;
        border-radius: 5px;

        cursor: pointer;

        transition: 0.20s;

        :hover{
            color: var(--fonts);
            background-color: var(--button-hover);;
        }
    }
   
`