import { useEffect, useState } from "react";
import EditClientClock from "./EditClientClock";
function Clock(props){
    const {userZoneDe, userZone , setUserTime ,date,setDate} = props.state
    let offset =  Number(userZoneDe.value);
    let utc = date.getTime() + date.getTimezoneOffset() * 60000;
    let localDate = new Date(utc +(3600000 * offset));
    // console.log(userZoneDe)
    function deleteClockHandel(){
        delete userZone[userZoneDe.tittle];
    }
    useEffect(() => {
     
        let id = setInterval(() => {
          setDate(() => new Date());
        }, 1000);
        return () => clearInterval(id);
        
    }, [date]);
    return(
        <div>
        <h3>{userZoneDe.tittle} </h3>
        {localDate.getHours().toString() +" : "+
            localDate.getMinutes().toString() + " : " + 
            localDate.getSeconds().toString() + " ( " + 
            localDate.getDate().toString() + " / " + 
            (localDate.getMonth() + 1).toString() + " / " +
            localDate.getFullYear().toString() + " )"
        }
        <p>{userZoneDe.name}</p>
        <button onClick={deleteClockHandel}>Delete this client</button>
        </div>
    )
}
export default Clock