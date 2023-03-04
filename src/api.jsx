import axios from "axios";

export function getallgroups(username){
    return axios.get(`http://localhost:5000/group/${username}`)
    .then(res=>res.data)
}