import React, {useState, useEffect, useRef} from 'react'
import "../../assets/Css/elementStyles.css"

function Datepicker({            
                id, 
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
        <>
        <div className="input-field mb-3"> 
            <input id={id ?? ""} ref={inputRef} placeholder={""} type="date" onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
            <label className={isFocussed || !isBlank ? "input-lbl-focussed":""} htmlFor={id ?? ""}>{label ?? ""}</label>
        </div>
        </>
  )
}

export default Datepicker