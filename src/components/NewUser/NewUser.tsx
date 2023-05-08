import React , {useState} from "react";






const NewUser =()=>{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleName =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  
  const handleEmail =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  
  const handlePassword =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }
  
  const handleForm =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const userInfo ={
      name,email,password
    }
    console.log(userInfo)
    
  }
  
  
  return(
    
    <div>
    <h1>Create NewUser By From</h1>
    
    
    <form onSubmit={handleForm}>
    
    <div>
    
    <label htmlFor="name">
    Name: 
    
    <input type="text" id="name" placeholder="Enter Your Name" value={name} onChange={handleName}/>
    
    </label>
    
    </div>
    
    
    
    
    
    <div>
    
    <label htmlFor="email">
    Email: 
    
    <input type="email" id="email" placeholder="Enter Your Email" value={email} onChange={handleEmail}/>
    
    </label>
    
    </div>
    
    
    
    
    <div>
    
    <label htmlFor="password">
    Password: 
    
    <input type="password" id="password" placeholder="Enter Your Password" value={password} onChange={handlePassword}/>
    
    </label>
    
    </div>
    
    
    
    
    
    
    <button type="submit">Submit</button>
    
    
    </form>
    
    
    
    
    
    
    </div>
    
    
    
    
   
    )
  
}


export default NewUser;