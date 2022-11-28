import { useInput } from "../../hooks/useInput";

interface Props {
  id:string
  placeholder:string
}

const displayMsg = (msg:string)=> {
  alert(msg)
}

const LoginInput = ({id, placeholder}:Props) => {

  const [inputValue, changeHandler, submitHandler] = useInput("안녕",displayMsg)



  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <input onChange={changeHandler} value={inputValue} type="text" id={id} placeholder={placeholder} />
      <button onClick={submitHandler}>확인</button>
    </div>
  );
};

export default LoginInput;