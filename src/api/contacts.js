import axios from "axios";

//using axios to connect to local database. 
export default axios.create({
    baseURL : " http://localhost:3006/"
})