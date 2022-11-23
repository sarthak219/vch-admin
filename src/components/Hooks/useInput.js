import { useState} from 'react'

function useInput(initialValue, onChange) {
    const [value, setValue] = useState(initialValue);
    const [isFocussed, setIsFocussed] = useState(false);

    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleFocus = ()=>{setIsFocussed(true)}

    const handleBlur = ()=>{setIsFocussed(false)}

    
  return {
    value,
    onChange: onChange ?? handleChange,
    isFocussed,
    onFocus:handleFocus,
    onBlur: handleBlur
  }
}

export default useInput