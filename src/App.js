
import { useState} from "react";
export default function App() {
  return(
    <DateCounter/>
    )
}

function DateCounter()
{
  
  const [step,setStep]=useState(1);
  const [count,setCount]=useState(0);
  
  function handleStepIncrease()
  {
        setStep((s)=>s+1);
  }
  function handleStepDecrease()
  {
        setStep((s)=>s-1);
  }



  function handleCountIncrease()
  {
        setCount((c)=>c+step);
  }
  function handleCountDecrease()
  {
        setCount((c)=>c-step);
  }

   
    
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + count);
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const month = monthsOfYear[currentDate.getMonth()];
      const dayOfMonth = currentDate.getDate();
      const year = currentDate.getFullYear();
      const formattedDate = `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
      


    
  
  return (
  <center>
    <div >

    <div >
      <button  onClick={handleStepDecrease}>-</button>
      <p className="inline">Step : {step}</p>
      <button onClick={handleStepIncrease}> +</button>
    </div>
    <div >
      <button onClick={handleCountDecrease} >-</button>
      <p  className="inline">Count : {count}</p>
      <button onClick={handleCountIncrease}> +</button>
    </div>
     {
      count>0 && ( <p>{count} days from today is {formattedDate} </p>)
     }
     {
      count==0 && ( <p> Today is {formattedDate} </p>)
     }
     {
      count<0 && ( <p> {count} days ago was {formattedDate}</p>)
     }
    </div>
    </center>

  )
}
