import { useState } from "react";
function CreatEvent(props){
    const [information , setInformation] = useState("")
    let {userZone,userZoneDe, setFlag } =  props.state;
    let [UsereventData, setUserEventDate] =useState({});
    let uuid = () => {
		return 'xxx-xxxxx-xxxxx-xxxxxxx-xxxxxxxxxxxxxx'.replace(/x/g, () =>{
			return (Math.random() * 16 | 0).toString(16)
		})
	}
    function handelSubmit(e){
        e.preventDefault();
    }
    function dateTimehandelar(e){
        let a = e.target.value;
        UsereventData.date = new Date(a)
    }
    function eventTittleHandeler(e){
        UsereventData.tittle = e.target.value;
    }
    function cancelClick(){
        setFlag(()=> 34)
    }
    function btnClick(){
        if(UsereventData.date == undefined){
            setInformation(()=> alert("Something Went Worng"))
            return;
        }
        let id = uuid();
        UsereventData.id = id;
        let temp = {...userZoneDe.eventData}
        userZone[userZoneDe.id].eventData = {};
        userZone[userZoneDe.id].eventData = {...temp};
        userZone[userZoneDe.id].eventData[id] = {...UsereventData};
        setFlag(()=> 34)
    }
    return(
        <>
            {information}
            <form action="" onSubmit={handelSubmit} style={{display : "flex", flexDirection : "column"}}>
            <label htmlFor="EventText" >Enter Event Tittle</label>
                <input onChange={eventTittleHandeler} style={{width : "30%"}} id= "EventText" type="text"/>
                <label htmlFor="eventTime">Set The Event Time and Date</label>
                <input onChange={dateTimehandelar} style={{width : "30%"}} id= "eventTime" type="datetime-local" />
                <button onClick={btnClick}>Submit</button>
                <button onClick={cancelClick}>Cancel</button>
            </form>
        </>
    )
}
export default CreatEvent;