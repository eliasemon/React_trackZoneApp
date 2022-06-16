function ShowEvent(props){
    let {setFlag} = props
    let eventData = props.state;
    let UI = Object.keys(eventData).map((id)=>{
        let Data =  {...eventData[id]};
        // console.log(Data)
        function deletehandeler(){
            delete eventData[id];
            setFlag(()=> 34)

        }
        return(
            <div style={{border : "2px solid green", marginBottom : "10px"}}>
                <p>{Data.tittle.toString()} <br /> {Data.date.toString()}</p>
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