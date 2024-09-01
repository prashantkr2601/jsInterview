import { useState } from "react";
import "./styles.css";

const App = () =>{
  let time  = new Date().toLocaleTimeString('en-US')

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString('en-US')
    setTime(time)
  }
  setInterval(UpdateTime)
  return <h1>{ctime}</h1>
}
export default App
