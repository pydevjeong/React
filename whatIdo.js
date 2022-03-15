function MinutesToHour(){
  const [amount,setAmount] = React.useState();
    const [inverted,setFlipped]= React.useState(false);

    const onChange= (event) =>{
      setAmount(event.target.value)
    };

    const reset=()=> setAmount(0)
    const onFlip= ()=> {
    reset(); 
    setFlipped((current) => !current)
    }
  return (
  <div>
    <div>
    <label htmlFor="minutes">Minutes</label>
    <input 
     value={inverted ? amount*60 : amount}
     id="minutes" 
     type="number"
     placeholder="Minutes"
     onChange={onChange}
     disabled={inverted}
     />
     </div>

  <div>
      <h4>You want to convert {amount}</h4>
    <label htmlFor="hours">Hours</label>
    <input 
    value={inverted ?amount : Math.round(amount/60)}
    id="hours" 
    type="number" 
    placeholder="Hours"
    disabled={!inverted}
    onChange={onChange}
    />
    </div>
    <button onClick={reset}>reset</button>
    <button onClick={onFlip}>{inverted ? "turn back" : "Invert"}</button>
  </div>
  );
}
  function KmToMiles(){
    const [speed,setSpeed]=React.useState();
    const [invert,setInvert]=React.useState(false);

    const reset=()=>setSpeed(0);

    const onChange=(e)=>{
      setSpeed(e.target.value);
    }
    const onTurn=()=>{
      reset();
      setInvert((i)=>!i)
    }
    return(
      <div>
        <div>
        <label htmlFor="km">Km</label>
        <input
        placeholder="Km"
        id="km"
        type="number"
        onChange={onChange}
        value={invert? speed/(0.62137):speed}
        disabled={invert}
        >
        </input>
        </div>

        <div>
        <label htmlFor="miles">Miles</label>
        <input
        placeholder="Miles"
        id="miles"
        type="number"
        onChange={onChange}
        value={invert? speed: speed*(0.62137)}
        disabled={!invert}
        >
        </input>
        </div>

        <button onClick={reset}>reset</button>
        <button onClick={onTurn}>Invert</button>
      </div>
    )
  }

  // const [index,setIndex] = React.useState(0)

  // const onSelect=(event)=>{
  //   setIndex(event.target.value);
  // }
  // <h1>Super Converter</h1>  
  // <select value={index} onChange={onSelect}>
  //   <option value="0">Minutes & hour</option>
  //   <option value="1">Km & miles</option>    
  // </select>
  // {index==="0" ? <MinutesToHour/> : null}
  // {index==="1" ? <KmToMiles /> : null}