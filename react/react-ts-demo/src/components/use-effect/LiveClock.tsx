import { useEffect, useState } from "react"

const LiveClock = () => {
    const [time,setTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return ()=>{
            console.log("Leaving page or leaving liveclock")
            clearInterval(intervalId);
        };

    },[]);

  return (
    <div>Current Time : {time}</div>
  )
}

export default LiveClock