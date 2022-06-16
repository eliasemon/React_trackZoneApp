import { useEffect, useState } from "react";
function Clock(props){
    const [date, setDate] = useState(new Date());
    const {userZoneDe, userZone ,setFlag} = props.state
    let offset =  Number(userZoneDe.value);
    let utc = date.getTime() + date.getTimezoneOffset() * 60000;
    let localDate = new Date(utc +(3600000 * offset));
    // console.log(userZoneDe)
    function deleteClockHandel(){
        delete userZone[userZoneDe.id];
        setFlag(()=> 34);
    }
    useEffect(() => {
     
        let id = setInterval(() => {
          setDate(() => new Date());
        }, 1000);
        return () => clearInterval(id);
        
    }, [date]);
    return(
        <div>
            {userZoneDe.mainUser === true ? "":(<button onClick={deleteClockHandel}>Delete this client</button>)}
            {userZoneDe.mainUser === true ? (<h4>Main User Clock</h4>):""}
        <h3>{userZoneDe.tittle} </h3>
        {localDate.toString().slice(0,25)}
        <p>{userZoneDe.name}</p>
        </div>
    )
}
export default Clock