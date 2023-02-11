import { useState } from "react";

const types = {
    email: {
        regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        message: 'Preencha um email válido'
    }
}

export function useForm(type){
    
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    function validate(value){
        if(type === false) return true
        
        if(value.length === 0) {
            setError('Preencha um valor')
            return false
        }else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message)
            return false
        }else{
            setError(null)
            return true
        }
    }

    function onChange({target}){
        // Validar depois de um error
        if(error){
            validate(target.value)
        }    
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}
