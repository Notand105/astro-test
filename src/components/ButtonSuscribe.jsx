import React,{useState} from 'react'
import { toast } from 'react-toastify';

const ButtonSuscribe = () => {

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter => counter + 1)
        toast.success("Se agregó uno")
    }

  return (
    <div>
        <button onClick={increment} >Hola compadre</button>
        <p>{counter}</p>
    </div>
  )
}

export default ButtonSuscribe