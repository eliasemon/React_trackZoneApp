import { useEffect, useState } from "react";
import SelectTimeZone from "./SelectTimeZone";
import Clock from "./Clock";
import EditClientClock from "./EditClientClock";
import CreatEvent from "./CreatEvent";
import ShowEvent from "./ShowEvent";
function App() {
  const [userZone, setUserTime] = useState({});
  const [flag,setFlag] = useState(7);
  const [uiDataTransfer, setUiData] = useState({})
  function btnclickHandeler(){
    setFlag(()=> 0)
  }
  let UI;
  function edithandle(userZoneDe){
   setUiData(()=> {
     return {...userZoneDe}
   })
   setFlag(()=> 2)
    
  }
  function addeventHandel(userZoneDe){
    setUiData(()=> {
      return {...userZoneDe}
    })
    setFlag(()=> 13)
     
   }

  if(flag === 7){
    UI = <SelectTimeZone state={{ userZone,flag,setFlag,setUserTime }} />;
  }
  if(!flag){
    UI = <SelectTimeZone state={{ userZone,flag,setFlag,setUserTime }} />;
    // setFlag(true);
  }
  if(flag === 1){
    UI= Object.keys(userZone).map((v)=> {
      let userZoneDe = userZone[v];
      let UserClockStyle;
      if(userZoneDe.mainUser){
        UserClockStyle = {width : "25%",position :"fixed" ,right : 0,top : 0,border : "4px solid #f1f1f1",padding : 20,background : "#f1f1f1" }
      }else{
        UserClockStyle = {border : "4px solid #f1f1f1",padding : 10}
      }
      return (
      <div style = {UserClockStyle}>
        <Clock state = {{userZone,userZoneDe,setFlag}} />
        {userZoneDe.eventData != undefined ?(<ShowEvent flag ={setFlag} state= {userZoneDe.eventData} />) : ""}
        {console.log(userZoneDe.eventData)}
        <button onClick={()=>edithandle(userZoneDe)}>Edit</button>
        <button onClick={()=>addeventHandel(userZoneDe)}>Add Event</button>
      </div>) 
    })
  }
  if(flag === 34){
    setFlag(()=> 1)
  }
  if(flag === 2){
    let userZoneDe = {...uiDataTransfer};
    UI = <EditClientClock state = {{userZone,userZoneDe, setFlag ,setUserTime}}/>
  }
  if(flag === 13){
    let userZoneDe = {...uiDataTransfer};
    UI = (<>
        <CreatEvent state = {{userZone,userZoneDe, setFlag ,setUserTime}}/>
        <div style={{ background:"#f1f1f1",border : "4px solid green" ,width : "30%", padding: 20,position : "fixed" , top : 0 , right : 0 }}>
        <h3>{userZoneDe.tittle}'s Clock</h3>
          <Clock state = {{userZoneDe, userZone,setFlag}} />
        </div>
      </>
    )
  }
  return (
  <>
    {UI}
    {flag === 1 ? <button onClick={btnclickHandeler} style= {{marginTop : 10}}>Add client Clock</button> : ""}
  </>);
}

export default App;
