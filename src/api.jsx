import axios from "axios";
// import { useParams } from "react-router-dom";
// const groupid=useParams();
export function getallgroups(username){
    return axios.get(`http://localhost:5000/group/${username}`)
    .then(res=>res.data)
}

export function getallgroupsmember(id){
    return axios.get(`http://localhost:5000/groupmem/${id}`)
    .then(res=>res.data)
}
export function getallexpensesbyid(id){
    return axios.get(`http://localhost:5000/expense/${id}`)
    .then(res=>res.data)
}
