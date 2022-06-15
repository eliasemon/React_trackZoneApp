import { useEffect, useState } from "react";
import SelectTimeZone from "./SelectTimeZone";
import Clock from "./Clock";
import EditClientClock from "./EditClientClock";
function App() {
  const [date, setDate] = useState(new Date());
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
        UserClockStyle = {width : "25%",position :"absolute" ,right : 0,top : 0,border : "4px solid #f1f1f1",padding : 20,background : "#f1f1f1" }
      }else{
        UserClockStyle = {border : "4px solid #f1f1f1",padding : 10}
      }
      return (
      <div style = {UserClockStyle}>
        <Clock state = {{userZoneDe,userZone ,setUserTime,date ,setDate}}/>
        <button onClick={()=>edithandle(userZoneDe)}>Edit</button>
      </div>) 
    })
  }
  if(flag === 2){
    console.log(uiDataTransfer)
    let userZoneDe = {...uiDataTransfer};
    UI = <EditClientClock state = {{userZone,userZoneDe, setFlag ,setUserTime}}/>
  }
  return (
  <>
    {UI}
    {flag === 1 ? <button onClick={btnclickHandeler} style= {{marginTop : 10}}>Add client Clock</button> : ""}
  </>);
}

export default App;
