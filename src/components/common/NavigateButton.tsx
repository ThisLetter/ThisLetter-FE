import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  color:string;
  page:string;
  text:string
}

const NavigateButton = ({color, page, text}:Props) => {
  const navigate = useNavigate()

  const goPages = (page:string)=> {
    navigate(page)
  }
  
  return (
    <div>
      <button className={'w-full h-20 mb-10 rounded box-border ' + color}  onClick={()=> {
        goPages(page)
      }}>{text}</button>
    </div>
  );
};

export default NavigateButton;