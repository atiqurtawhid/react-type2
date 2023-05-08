import React,{useState} from "react";






const User =()=>{
  const [userName, setUserName] = useState("")
  const handleUserNameChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setUserName(event.target.value)
  }
  
  const handleClick =(e:React.MouseEvent<HTMLButtonElement>)=>{
    
    console.log(userName)
    
  }
  
  return(
    
    
    <div>
    
    <h1>Create A New User </h1>
    
    <input type="text" placeholder="Enter Your Name" value={userName} onChange={handleUserNameChange}/>
    
    <button onClick={handleClick}>Show Name</button>
    
    
    <h2>Typing Your Name:
    
    {userName}
    
    </h2>
    
    
    </div>
    
    
    
    )
}



export default User;