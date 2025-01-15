import { UsersContext } from "./main";
import { useContext } from "react";
const Show=()=>{

   const{state}=useContext(UsersContext);
   console.log("from show beform return sate",state);

  return(
  <>
  <h2>Show Data </h2>
  {
  state.users.map((user,i)=>{return(
    <div key={i}>
      <h3>{user.name}</h3>
      <p>
        {user.age}<br />
        {user.email}
      </p>
    </div>
  )
  })}
  </>
  
)}
export default Show;
