import { useState,useEffect } from "react";
function EventTimeleft(props){
    let {userZoneDe, Data} = props
    const [date, setDate] = useState(new Date());
    let offset =  Number(userZoneDe.value);
    let utc = date.getTime() + date.getTimezoneOffset() * 60000;
    let localDate = new Date(utc +(3600000 * offset));
    let gap = Data.date.getTime()  - localDate.getTime();
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / (second));
        
        useEffect(() => {
     
            let id = setInterval(() => {
              setDate(() => new Date());
            }, 1000);
            return () => clearInterval(id);
            
        }, [date]);
    return (
        <>
        <span>Left Time: </span>{d} <span> days: </span> {h} <span> Hours: </span> {m} <span> Minutes: </span>
            {s} <span> Seconds </span>
            <br />
        </>
    )
}
function ShowEvent(props){
    
    let {setFlag,userZoneDe} = props.flag
    let eventData = props.state;
    
    let UI = Object.keys(eventData).map((id)=>{
        let Data =  {...eventData[id]};
        
        function deletehandeler(){
            delete eventData[id];
            setFlag(()=> 34)

        }
        return(
            <div style={{border : "2px solid green", marginBottom : "10px"}}>
<p>{Data.tittle.toString()} <br /> {Data.date.toString().slice(0,25)}</p>
<EventTimeleft userZoneDe = {userZoneDe} Data = {Data} />   
                <button onClick={deletehandeler}>Delete This</button>
            </div>
        )
    });


    return(
        <div>
            <h4 style={{margin : 0}}>Events</h4>
            {UI}
        </div>
    )
}
export default ShowEvent;