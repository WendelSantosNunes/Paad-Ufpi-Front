import styled from "styled-components";

export const InputDiv = styled.div`

    display:flex;
    flex-direction: column;

    label{
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.75rem;
    }

    input{
        margin: 0 0 1rem 0.5rem;
        
        border: 1px solid #EEE;
        border-radius: 5px;

        padding: 0.5rem 0 0.5rem 1.25rem;
    }

   .error{
        color: #f31;
        font-size: .875rem;
        margin: 0.25rem;
   }
`