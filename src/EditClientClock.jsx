function EditClientClock(props){
	let {userZone,userZoneDe, setFlag ,setUserTime} = props.state;
	let {id ,tittle, mainUser} = userZoneDe;
	let backUpuserZoneDe = {...userZoneDe}
    // console.log(userZoneDe)
	let zoneOffset = {"value": userZoneDe.value, "name" : userZoneDe.name}
	function cancelClick(){
        setFlag(()=> 34)
    }
	  function titleHandeler(e){
		tittle = e.target.value;
	  }
	  function timeZoneHandeler(e){
		 zoneOffset =  JSON.parse(e.target.value)
		
	  }
	  function handleSubmit(event) {
		event.preventDefault();
	  }
	  function btnClick (){
        delete userZone[id];
		userZone[id] = {...backUpuserZoneDe,"id" : id,"tittle" : tittle, ...zoneOffset,"mainUser" : mainUser};
        setFlag(()=>1)
	  }
    return(
	<form action="" onSubmit={handleSubmit}>
		<h1>Input Tittle</h1>
		<input type="text" placeholder={userZoneDe.tittle} onChange={titleHandeler} />
		<h1>Select Your Time Zone</h1>
        <select name="timezone_offset" id="timezone-offset" onChange ={timeZoneHandeler}  >
	<option value='{"value":-12 , "name" : "Eniwetok, Kwajalein"}'>(GMT -12:00) Eniwetok, Kwajalein</option>
	<option value='{"value": -11 , "name" : "Midway Island, Samoa"}'>(GMT -11:00) Midway Island, Samoa</option>
	<option value='{"value": -10 , "name" : "Hawaii"}'>(GMT -10:00) Hawaii</option>
	<option value='{"value": -9.50 , "name" : "Taiohae"}'>(GMT -9:30) Taiohae</option>
	<option value='{"value": -9 , "name" : "Alaska"}'>(GMT -9:00) Alaska</option>
	<option value='{"value": -8 , "name" : "Pacific Time (US &amp; Canada)"}'>(GMT -8:00) Pacific Time (US &amp; Canada)</option>
	<option value='{"value": -7 , "name" : "Mountain Time (US &amp; Canada)"}'>(GMT -7:00) Mountain Time (US &amp; Canada)</option>
	<option value='{"value": -6 , "name" : "Central Time (US &amp; Canada), Mexico City"}'>(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
	<option value='{"value": -5 , "name" : "Eastern Time (US &amp; Canada), Bogota, Lima"}'>(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
	<option value='{"value":-4.50 , "name" : "Caracas"}'>(GMT -4:30) Caracas</option>
	<option value='{"value":-4 , "name" : "Atlantic time (Canada) , Caracas , La Paz"}'>(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
	<option value='{"value":-3.50 , "name" : "Newfoundland"}'>(GMT -3:30) Newfoundland</option>
	<option value='{"value":-3 , "name" : "Brazil, Buenos Aires, Georgetown"}'>(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
	<option value='{"value":-2 , "name" : "Mid-Atlantic"}'>(GMT -2:00) Mid-Atlantic</option>
	<option value='{"value":-1 , "name" : "Azores, Cape Verde Islands"}'>(GMT -1:00) Azores, Cape Verde Islands</option>
	<option value='{"value":0.00 , "name" : "Western Europe Time, London, Lisbon, Casablanca"}'>(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
	<option value='{"value":1.00 , "name" : "Brussels, Copenhagen, Madrid, Paris"}'>(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
	<option value='{"value":2.00 , "name" : "Kaliningrad, South Africa"}'>(GMT +2:00) Kaliningrad, South Africa</option>
	<option value='{"value":3.00 , "name" : "Baghdad, Riyadh, Moscow, St. Petersburg"}'>(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
	<option value='{"value":3.50 , "name" : "Tehran"}'>(GMT +3:30) Tehran</option>
	<option value='{"value":4.00 , "name" : "Abu Dhabi, Muscat, Baku, Tbilisi"}'>(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
	<option value='{"value":4.50 , "name" : "Kabul"}'>(GMT +4:30) Kabul</option>
	<option value='{"value":5 , "name" : "Ekaterinburg, Islamabad, Karachi, Tashkent"}'>(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
	<option value='{"value":5.50 , "name" : "Bombay, Calcutta, Madras, New Delhi"}'>(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
	<option value='{"value":5.70 , "name" : "Kathmandu , Pokhara"}'>(GMT +5:45) Kathmandu, Pokhara</option>
	<option value='{"value":6 , "name" : "Almaty, Dhaka, Colombo"}'>(GMT +6:00) Almaty, Dhaka, Colombo</option>
	<option value='{"value":6.50 , "name" : "Yangon , Mandalay"}'>(GMT +6:30) Yangon, Mandalay</option>
	<option value='{"value":7 , "name" : "Bangkok, hanoi, Jakarta"}'>(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
	<option value='{"value":8 , "name" : "Beijing, Perth, Singapore, Hong Kong"}'>(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
	<option value='{"value":8.75 , "name" : "Eucla"}'>(GMT +8:45) Eucla</option>
	<option value='{"value":9 , "name" : "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"}'>(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
	<option value='{"value":9.50 , "name" : "Adelaide, Darwin"}'>(GMT +9:30) Adelaide, Darwin</option>
	<option value='{"value":10 , "name" : "Eastern Australia, Guam, Vladivostok"}'>(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
	<option value='{"value":10.50 , "name" : "Lord Howe Island"}'>(GMT +10:30) Lord Howe Island</option>
	<option value='{"value":11 , "name" : "Magadan, Solomon Islands, New Caledonia"}'>(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
	<option value='{"value":11.50 , "name" : "Norfolk Island"}'>(GMT +11:30) Norfolk Island</option>
	<option value='{"value":12 , "name" : "Auckland, Wellington, Fiji, Kamchatka"}'>(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
	<option value='{"value":12.75 , "name" : "Chathan Islands"}'>(GMT +12:45) Chatham Islands</option>
	<option value='{"value":13 , "name" : "Apia , Nukualofa"}'>(GMT +13:00) Apia, Nukualofa</option>
	<option value='{"value":14 , "name" : "Line Islands , Tokelau"}'>(GMT +14:00) Line Islands, Tokelau</option>
</select>
<button type="submit" onClick={btnClick}>Submit</button>
<button type ="cancel" onClick={cancelClick}>Cancel</button>
</form>
	
    )
}
export default EditClientClock;