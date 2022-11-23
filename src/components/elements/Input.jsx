import React, {useEffect, useRef, useState} from 'react'
import "../../assets/css/elements/elementStyles.css"

function Input({
            id, 
            type, 
            label,
            onChange, 
            value, 
            onFocus, 
            onBlur, 
            isFocussed}) 
    {
    const inputRef = useRef(null);
    const [isBlank, setIsBlank] = useState(true);

    useEffect(()=>{
        const initVal = inputRef.current.value;
        setIsBlank(initVal === null || initVal === "" || initVal === 0)
    }, [inputRef])

    useEffect(()=>{
        setIsBlank(value === null || value === "" || value === 0)
    }, [value])

    return (
        <div className="input-field mb-3"> 
            <input  ref={inputRef}
                    id={id ?? ""} 
                    type={type} 
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            <label className={isFocussed || !isBlank ? "input-lbl-focussed":""} htmlFor={id ?? ""}>{label}</label>
        </div>
    )
}

export default Input