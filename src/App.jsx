import { useEffect, useState } from "react";
import SelectTimeZone from "./SelectTimeZone";
import Clock from "./Clock";
import EditClientClock from "./EditClientClock";
function App() {
  const [date, setDate] = useState(new Date());
  const [userZone, setUserTime] = useState({});
  const [flag,setFlag] = useState(0);
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
  if(!flag){
    UI = <SelectTimeZone state={{ userZone,setFlag,setUserTime }} />;
    // setFlag(true);
  }
  if(flag === 1){
    UI= Object.keys(userZone).map((v)=> {
      let userZoneDe = userZone[v];
      return (
      <div style = {{border : "1px solid #f1f1f1"}}>
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
  return (<>
  {UI}
  {flag === 1 ? <button onClick={btnclickHandeler} style= {{marginTop : 10}}>Add client Clock</button> : ""}
  </>);
}

export default App;
