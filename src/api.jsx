import axios from "axios";
// import { useParams } from "react-router-dom";
// const groupid=useParams();
export function getallgroups(username){
    return axios.get(`https://batwarabackend-production.up.railway.app/group/${username}`)
    .then(res=>res.data)
}

export function getallgroupsmember(id){
    return axios.get(`https://batwarabackend-production.up.railway.app/groupmem/${id}`)
    .then(res=>res.data)
}
export function getallexpensesbyid(id){
    return axios.get(`https://batwarabackend-production.up.railway.app/expense/${id}`)
    .then(res=>res.data)
}
export function expenseformember(member){
    return axios.get(`https://batwarabackend-production.up.railway.app/expensive/${member}`)
    .then(res=>res.data)
}
export function settle(member){
    return axios.get(`https://batwarabackend-production.up.railway.app/settle/${member}`)
    .then(res=>res.data)
}

export function getpersondata(){
      const token = localStorage.getItem("token");
   
      return  axios.get("https://batwarabackend-production.up.railway.app/user",{
        headers:{"Authorization":`Bearer ${token}`}
      })
      .then(res=>res.data)
    
  }

