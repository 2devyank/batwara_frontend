import { createContext, useContext, useEffect, useState } from "react";

const UserAuth=createContext();

// const name="dev"


const UserAuthProvider=({children})=>{
    const [username,setusername]=useState();
const[exp,setexp]=useState([]);
const[load,setload]=useState(false);
// const[filexp,setfilexp]=useState([]);

useEffect(()=>{
getallexpense();
},[])
async function getallexpense(){
    try{
const result = await fetch("http://localhost:5000/expense") 
const data=await result.json();
setexp(data);
setload(true);
    }catch(e){
        console.log(e);
    }
}
// console.log(exp);



 let filexp= exp.filter(function(arr){
 return arr.payer==username;
  })
let filesuperexp=[];
  if(load){
 
  

  filesuperexp=exp.filter(function(arr){
    if(arr.member!=null && arr.payer!=username){
    return arr.member.map((data)=>{
        data==username;
    })
}
 })
}
if(filexp){
// console.log(filexp);
// console.log(filesuperexp);
}















    return(
        <UserAuth.Provider value={{username,setusername,filesuperexp,filexp}}>
            {children}
        </UserAuth.Provider>
    )

}
export default UserAuthProvider;

export function useUserAuth(){
    return useContext(UserAuth);
}

