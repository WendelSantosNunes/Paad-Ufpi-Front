import { InputDiv } from "./styles";



export function Input({label, type, name, value, onChange, error, onBlur}) {
    return(
        <>
            <InputDiv>
                <label htmlFor={name}>{label}</label>
                <input 
                    type={type} 
                    id={name} 
                    name={name} 
                    value={value} 
                    onChange={onChange}
                    onBlur={onBlur}
                    />
                {error && <p className="error">{error}</p>}
            </InputDiv>
        </>
    )
}