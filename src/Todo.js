import React, { useState } from 'react'
import './Todo.css'
export default function Todo() {
    const[activity,setActivity]=useState("");
    const [list,setList]=useState([]);
    function addActivity(){
    setList((list)=>{
        const updatedList=[...list,activity]
        console.log(updatedList)
        setActivity("")
        return updatedList
      })
    }
    function removeActivity(index){
     const xyz =list.filter((elem,id)=>{
      return index!=id;
     })
     setList(xyz);
    }
    function removeAll(){
      setList([]);
    }
    return (
    <>
    <div className='container'>
    <div className='header'><h1>To <span style={{color:"green"}}>D</span><span style={{color:"red"}}>o</span> List</h1></div>
    <input className='add-input' type='text' placeholder='Add Your Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
    <button  className='Add-btn'   onClick={addActivity}>Add</button>
    <p className='list-heading'>Here is your List : {(")")}</p>
    {list!=[]&& list.map((data,index)=>{
      return (
        <div className='border'><p key={index} ><div className='act'>{data}</div>
       <span><div><button className="remove-btn" onClick={()=>removeActivity(index)}>Remove</button></div> </span> 
        </p></div>
      )
    })}
    {list.length>=2 && <button className='removeAll'    onClick={removeAll}>Remove All</button>}
    
    </div>
        
    </>
  )
}
