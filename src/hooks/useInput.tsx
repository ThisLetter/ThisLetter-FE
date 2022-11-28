import React, { ChangeEvent, useState } from 'react';
interface Props {
  initialValue:string,
  submitAction: (inputValue:string)=>void
}


export const useInput = (initialValue:string, submitAction:(inputValue:string)=>void) => {
    
  const [inputValue, setInputValue]= useState<any>(initialValue);

  const changeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
    setInputValue(e.target.value)
  }

  const submitHandler = ()=> {
    setInputValue("")
    submitAction(inputValue)
  }

  return [inputValue, changeHandler, submitHandler]
}