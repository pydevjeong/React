import { useState,useEffect } from "react"


function Hello(){
  // function byeFu(){
  //   console.log("bye");
  // }
  // function hiFn(){
  //   console.log("created :)");
  //   return byeFu;
  // }
  
  useEffect(()=>{
    console.log("Hi :)");
    return ()=>console.log("bye :(");
  },[])

  
  return <h1>Hello</h1>
}

function App2(){
  const [showing,setShowing]=useState(false)
  const onClick =() => setShowing((prev)=>!prev)
  return(
  <div>
    {showing ? <Hello/> : null}
    <button onClick={onClick}>{showing? "Hide":"Show"}</button>
  </div>
  )
}

export default App2;


//카운터

// import Button from "./Button"
// // import styles from "./App.module.css"
// import { useEffect, useState } from "react";

// function App() {
//   const [counter,setValue]=useState(0);
//   const [keyword,setKeyword]=useState("")
//   const onClick=()=> setValue((prev)=>prev+1)
//   const onChange= (event) => setKeyword(event.target.value)
//   console.log("항상 실행");
//   useEffect(()=>{
//     console.log("한번만 실행됩니다.");
//   },[])
//   useEffect(()=>{
//     if(keyword.length>5 && keyword !== ''){
//       console.log("hi");
//     }
//   },[keyword])
//   useEffect(()=>{
//     console.log("counter가 변화할때 출력");
//   },[counter])
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search"/>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>
//       <Button text={"Continue"}/>
//     </div>
//   );
// }

// export default App;


//ToDoApp

// import {useState} from "react"

// function App(){
//   const [toDo,setToDo]=useState("")
//   const [toDos,setToDos]=useState([])
//   const onChange=(event)=> setToDo(event.target.value)
//   const onSubmit=(event)=> {
//     event.preventDefault();
//     if(toDo===""){
//       return;
//     }
//     setToDos((currentArray)=>[toDo,...currentArray])
//     setToDo("")
//   }
//   console.log(toDos);
//   return(
//   <div>
//     <h1>My To Dos ({toDos.length})</h1>
//     <form onSubmit={onSubmit}>
//     <input onChange={onChange} value={toDo} type="text" placeholder="Write on it" />
//     <button>Add To Do</button>
//     </form>
//     <hr />
//     <ul>
//     {toDos.map((item,key)=><li key={key}>{item} </li>)}
//     </ul>
//   </div>
//   )
// }

// export default App



//CoinTraker

// import { useEffect, useState } from "react"


// function App(){
//   const [loading,setLoading]=useState(true);
//   const [coins,setCoins] =useState([])
//   const [buyCoins,setBuyCoins]=useState(0);
//   const [selected,setSelected]=useState(0);


//   const selectedCoin=(event)=>{
//     setSelected(event.target.value);
//   }

//   const onChange=(event)=>{
//     setBuyCoins(event.target.value) 
//   }

  
// useEffect(()=>{
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response)=>response.json())
//     .then((json)=>{
//       setCoins(json)
//       setLoading(false)
//     })
//   },[])


//   return(
//     <div>
//       <h1>The Coins!{loading ? "":`Here are ... ${coins.length}`}</h1>
//       {loading ? <strong>Loading...</strong> :       
//       <select onChange={selectedCoin}>
//         <option value="None">Choose One</option>
//         {coins.map((coin,index)=>(
//           <option 
//           key={index}
//           name={coin.name} 
//           symbol={coin.symbol}
//           value={coin.quotes.USD.price}>{coin.name} : {coin.symbol} : {coin.quotes.USD.price} USD</option>
//         ))}
//       </select>}
//       <input onChange={onChange} type="text" placeholder="Input your money"/>
//       <hr />
//       <h2>You select {parseInt(selected)} and you need( {parseInt(selected)-buyCoins > 0 ? parseInt(selected)-buyCoins:"You have enough money"} )</h2>
//     </div>)
//   }



// export default App