import { ButtonContainer } from "./styles";

export function Button({children, ...props}) {
    return(
        <ButtonContainer>
            <button {...props}>{children}</button>
        </ButtonContainer>
    )
}